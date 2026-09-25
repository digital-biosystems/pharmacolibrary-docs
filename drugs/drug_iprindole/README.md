<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;iprindole&quot;}]"></div>

# iprindole

- **generic name:** iprindole
- **ATC codes:** `N06AA13`
- **DrugBank:** [DB13496](https://go.drugbank.com/drugs/DB13496)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-23 22:54 | 5:41 | 0/0/0 | 0/0/0 | 0/0/0 | 18,291/1,699 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Friedman_1977.pdf` | Friedman E et al., Antidepressant drugs and dopamine uptak…, European journal of pharmac… (1977) | pd | 4 | [10.1016/0014-2999(77)90189-3](https://doi.org/10.1016/0014-2999(77)90189-3) | [844489](https://www.ncbi.nlm.nih.gov/pubmed/844489) | metadata signals extractable PD data (IC50) |
| `Harris_1973.pdf` | Harris M et al., Effect of centrally acting drugs on the…, British journal of pharmaco… (1973) | pd | 4 | [10.1111/j.1476-5381.1973.tb08320.x](https://doi.org/10.1111/j.1476-5381.1973.tb08320.x) | [4722039](https://www.ncbi.nlm.nih.gov/pubmed/4722039) | metadata signals extractable PD data (IC50) |
| `Hrdina_1987.pdf` | Hrdina PD, Regulation of high- and low-affinity [3…, European journal of pharmac… (1987) | pd | 4 | [10.1016/0014-2999(87)90429-8](https://doi.org/10.1016/0014-2999(87)90429-8) | [3040430](https://www.ncbi.nlm.nih.gov/pubmed/3040430) | metadata signals extractable PD data (IC50) |
| `Manier_1980.pdf` | Manier DH et al., Development of and recovery from subsen…, Naunyn-Schmiedeberg's archi… (1980) | pd | 4 | [10.1007/BF00498565](https://doi.org/10.1007/BF00498565) | [6252479](https://www.ncbi.nlm.nih.gov/pubmed/6252479) | metadata signals extractable PD data (EC50) |
| `McMillen_1992.pdf` | McMillen BA et al., On central muscle relaxants, strychnine…, Journal of neural transmiss… (1992) | pd | 4 | [10.1007/BF01245348](https://doi.org/10.1007/BF01245348) | [1329854](https://www.ncbi.nlm.nih.gov/pubmed/1329854) | metadata signals extractable PD data (IC50) |
| `Randrup_1977.pdf` | Randrup A et al., Uptake inhibition of biogenic amines by…, Psychopharmacology (1977) | pd | 4 | [10.1007/BF00492370](https://doi.org/10.1007/BF00492370) | [408861](https://www.ncbi.nlm.nih.gov/pubmed/408861) | metadata signals extractable PD data (IC50) |
| `Silver_1986.pdf` | Silver PJ et al., Antidepressants and protein kinases: in…, European journal of pharmac… (1986) | pd | 4 | [10.1016/0014-2999(86)90393-6](https://doi.org/10.1016/0014-2999(86)90393-6) | [2869958](https://www.ncbi.nlm.nih.gov/pubmed/2869958) | metadata signals extractable PD data (IC50) |
| `Wolfe_1978.pdf` | Wolfe BB et al., Presynaptic modulation of beta adrenerg…, The Journal of pharmacology… (1978) | pd | 4 | not captured | [213556](https://www.ncbi.nlm.nih.gov/pubmed/213556) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-23T22:53:33.802876+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bonnet_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine uptake/release in rat synaptosomes, not a pharmacokinetic study reporting disposition parameters for iprindole. |
| PD | Bonnet_1984 | not_relevant | 3 | 2 | The paper reports a qualitative observation of dopamine release at high concentrations (&gt;3 x 10^-6 M) for iprindole but does not provide numeric PD parameters (like IC50 or Emax) or a quantitative concentration-effect curve for iprindole in this text. |
| popPK | Friedman_1977 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine uptake inhibition (IC50) in rat synaptosomes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Gandolfi_1984 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo mechanistic investigation of receptor binding and adenylate cyclase activity, reporting no pharmacokinetic parameters for iprindole. |
| PD | Gandolfi_1984 | not_relevant | 3 | 2 | The paper reports an in vitro IC50 and qualitative changes in receptor binding/function after chronic dosing, but lacks a formal PK/PD model or dose-response curve with derivable PD parameters like Emax or EC50 for the in vivo effects. |
| popPK | Harris_1973 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | Harris_1973 | not_relevant | 0 | 0 | The paper studies the effect of centrally acting drugs on GABA uptake in rat cortex and does not mention iprindole or report any pharmacodynamic parameters for it. |
| popPK | Hrdina_1987 | irrelevant | 0 | 0 | The study is a receptor binding and neurochemical analysis in rats, not a pharmacokinetic study, and reports no disposition parameters for iprindole. |
| PD | Hrdina_1987 | not_relevant | 1 | 0 | The paper reports qualitative changes in receptor affinity (IC50) and neurotransmitter levels after chronic treatment, but does not provide a concentration-effect or dose-response curve for iprindole, nor does it report numeric PD parameters (like Emax or EC50 for the drug's effect) that can be extracted. |
| popPK | Kendall_1985 | irrelevant | 0 | 0 | The study is a pharmacological investigation of inositol phospholipid hydrolysis in rat brain slices, not a pharmacokinetic study, and reports no disposition parameters for iprindole. |
| PD | Kendall_1985 | not_relevant | 2 | 1 | The paper describes qualitative changes in receptor-mediated signaling (inositol phospholipid hydrolysis) following chronic iprindole treatment but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model for the drug itself. |
| popPK | Lavoie_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel inhibition in rat synaptosomes and does not report pharmacokinetic parameters for iprindole. |
| popPK | Manier_1980 | irrelevant | 0 | 0 | The study is a neuropharmacological investigation of receptor subsensitivity and cyclic AMP generation, not a pharmacokinetic study, and reports no disposition parameters for iprindole. |
| popPK | McMillen_1992 | irrelevant | 0 | 0 | The paper is a mechanistic study on muscle relaxants and NMDA receptors where iprindole is only mentioned as a co-administered agent in a neurotoxicity model, with no pharmacokinetic parameters reported. |
| PD | McMillen_1992 | not_relevant | 0 | 0 | The paper focuses on zoxazolamine and HA-966; iprindole is only mentioned as a co-administered agent in a neurotoxicity assay without any exposure-response or dose-response analysis for iprindole itself. |
| popPK | Meltzer_1981 | irrelevant | 0 | 0 | The study is a pharmacological investigation of prolactin secretion in rats, not a pharmacokinetic study, and reports no disposition parameters for iprindole. |
| PD | Meltzer_1981 | not_relevant | 1 | 0 | The paper describes qualitative pharmacological effects (inhibition/potentiation) of iprindole on prolactin secretion in a rat model but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for iprindole. |
| popPK | Ortega-Corona_1981 | irrelevant | 0 | 0 | The study focuses on the mechanism of action (MAO inhibition) and neurotransmitter content, not pharmacokinetic disposition parameters. |
| popPK | Randrup_1977 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Randrup_1977 | not_relevant | 0 | 0 | The paper is a review discussing the dopamine hypothesis and uptake inhibition mechanisms, but it does not report specific pharmacokinetic or pharmacodynamic data, exposure-response curves, or numeric PD parameters for iprindole. |
| popPK | Silver_1986 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| popPK | Wolfe_1978 | irrelevant | 0 | 0 | The paper is a mechanistic study on beta-adrenergic receptor modulation in rat brain tissue and does not report any pharmacokinetic parameters for iprindole. |
| PD | Wolfe_1978 | not_relevant | 2 | 1 | The paper reports qualitative changes in receptor density and cAMP accumulation for iprindole but does not provide numeric PD parameters (e.g., Emax, EC50) or an exposure-response curve for the drug itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
