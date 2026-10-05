<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;cetiedil&quot;}]"></div>

# cetiedil

- **generic name:** cetiedil
- **ATC codes:** `C04AX26`
- **DrugBank:** [DB13753](https://go.drugbank.com/drugs/DB13753) · **PubChem:** not captured
- **molar mass:** 349.53 g/mol (C20H31NO2S) — DrugBank
- **groups:** experimental

## About

Cetiedil is a vasodilator that has also been studied as an antisickling agent, and it was classified as a peripheral vasodilator for cardiovascular use. It is considered experimental and there is no evidence of current authorised use in major markets such as the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5065661](https://www.wikidata.org/wiki/Q5065661) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 09:17 | 1:26 | 0/0/0 | 1/0/0 | 0/0/0 | 1,610/112 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Agre_1984_125I_CaM_binding](drugs/drug_cetiedil/pd_Agre_1984_125I_CaM_binding.md) | Ca2+-dependent calmodulin binding to erythrocyte membranes ← bepridil; cetiedil; trifluoperazine · inhibition effect | — | Agre P et al., Bepridil and cetiedil. Vasodilators whi…, The Journal of clinical inv… (1984) | [10.1172/JCI111497](https://doi.org/10.1172/JCI111497) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Agre_1984_Ca2_ATPase](drugs/drug_cetiedil/pd_Agre_1984_Ca2_ATPase.md) | calmodulin-activated erythrocyte membrane Ca2+-ATPase activity ← bepridil; cetiedil; trifluoperazine · inhibition effect | — | Agre P et al., Bepridil and cetiedil. Vasodilators whi…, The Journal of clinical inv… (1984) | [10.1172/JCI111497](https://doi.org/10.1172/JCI111497) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Orringer_1986.pdf` | Orringer EP et al., A single-dose pharmacokinetic study of…, Clinical pharmacology and t… (1986) | popPK | 8 | [10.1038/clpt.1986.39](https://doi.org/10.1038/clpt.1986.39) | [3512147](https://pubmed.ncbi.nlm.nih.gov/3512147) | The study reports a three-compartment model for cetiedil but only provides qualitative concentration ranges (70-200 ng/ml, ~10 ng/ml) rather than specific quantitative PK parameters like CL, V, or ka. |
| `Arrazola_1993.pdf` | Arrazola A et al., Cell volume regulation in rat thymocytes, The Journal of physiology (1993) | pd | 5 | [10.1113/jphysiol.1993.sp019683](https://doi.org/10.1113/jphysiol.1993.sp019683) | [8229842](https://www.ncbi.nlm.nih.gov/pubmed/8229842) | metadata signals extractable PD data (IC50) |
| `Jensen_1998.pdf` | Jensen BS et al., Characterization of the cloned human in…, The American journal of phy… (1998) | pd | 5 | [10.1152/ajpcell.1998.275.3.C848](https://doi.org/10.1152/ajpcell.1998.275.3.C848) | [9730970](https://www.ncbi.nlm.nih.gov/pubmed/9730970) | metadata signals extractable PD data (IC50) |
| `Dube_1987.pdf` | Dube MP et al., Bepridil and cetiedil reversibly inhibi…, Molecular endocrinology (Ba… (1987) | pd | 4 | [10.1210/mend-1-2-168](https://doi.org/10.1210/mend-1-2-168) | [2970587](https://www.ncbi.nlm.nih.gov/pubmed/2970587) | metadata signals extractable PD data (IC50) |
| `Sandford_1992.pdf` | Sandford CA et al., Properties of a cell volume-sensitive p…, The Journal of physiology (1992) | pd | 4 | [10.1113/jphysiol.1992.sp018995](https://doi.org/10.1113/jphysiol.1992.sp018995) | [1593444](https://www.ncbi.nlm.nih.gov/pubmed/1593444) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T09:17:54.684523+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agre_1984 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of calmodulin inhibition and does not report any pharmacokinetic parameters for cetiedil. |
| popPK | Arrazola_1993 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| PD | Arrazola_1993 | not_relevant | 0 | 0 | The paper discusses cell volume regulation in rat thymocytes and does not mention cetiedil or report any pharmacodynamic or exposure-response data for it. |
| popPK | Barksmann_2004 | irrelevant | 0 | 0 | The paper is a mechanistic study of ion channels where cetiedil is used only as a negative control/comparator, with no pharmacokinetic parameters reported. |
| PD | Barksmann_2004 | not_relevant | 0 | 0 | The paper reports that cetiedil had no effect on the channel, providing no numeric PD parameters or dose-response relationship for cetiedil. |
| popPK | Benton_1996 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study investigating the pharmacological effects of cetiedil on potassium channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Benton_1999 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on ion channel blocking in red cells, not a pharmacokinetic study, and reports no disposition parameters for cetiedil. |
| popPK | Dube_1987 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| popPK | Jensen_1998 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Jensen_1998 | not_relevant | 0 | 0 | The paper characterizes a cloned ion channel and does not report any pharmacodynamic or exposure-response data for the drug cetiedil. |
| popPK | Maeno_1994 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of neuromuscular transmission in frogs, not a pharmacokinetic study, and cetiedil is used only as a test compound for mechanism of action. |
| popPK | Malik-Hall_2000 | irrelevant | 0 | 0 | The paper is a mechanistic study of ion channel blockers in rabbit blood cells and does not report pharmacokinetic parameters for cetiedil. |
| popPK | Narenjkar_2004 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study reporting IC50 values for cellular inhibition, not pharmacokinetic disposition parameters. |
| popPK | Narenjkar_2004_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cetiedil's effect on mast cell mediator release, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Orringer_1986 | relevant | 8 | 2 | The study reports a three-compartment model for cetiedil but only provides qualitative concentration ranges (70-200 ng/ml, ~10 ng/ml) rather than specific quantitative PK parameters like CL, V, or ka. |
| popPK | Roxburgh_1996 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro pharmacological actions (K+ channel blocking, smooth muscle contraction) of cetiedil enantiomers, containing no pharmacokinetic or disposition parameters. |
| popPK | Sandford_1992 | irrelevant | 0 | 0 | The paper is an electrophysiology study of potassium channels in hepatocytes where cetiedil is used as a pharmacological blocker, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
