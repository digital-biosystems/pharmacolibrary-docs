<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03B&quot;,&quot;href&quot;:&quot;atc/C03B.md&quot;},{&quot;label&quot;:&quot;mersalyl&quot;}]"></div>

# mersalyl

- **generic name:** mersalyl
- **ATC codes:** `C03BC01`
- **DrugBank:** [DB09338](https://go.drugbank.com/drugs/DB09338) · **PubChem:** [CID 443130](https://pubchem.ncbi.nlm.nih.gov/compound/443130)
- **molar mass:** 483.87 g/mol (C13H17HgNO6) — DrugBank
- **groups:** experimental

## About

Mersalyl is a mercurial compound that was formerly used as a diuretic to treat fluid retention.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424871](https://www.wikidata.org/wiki/Q424871) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 07:38 | 0:41 | 0/0/0 | 0/0/0 | 0/0/0 | 1,734/158 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mersalyl) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ALPL (target), AQP1 (unknown), ITIH1 (inducer), PCK1 (inhibitor), SLC16A1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 22 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Beavis_1991.pdf` | Beavis AD, N-ethylmaleimide and mercurials modulat…, Biochimica et biophysica ac… (1991) | pd | 4 | [10.1016/0005-2736(91)90360-k](https://doi.org/10.1016/0005-2736(91)90360-k) | [1707670](https://www.ncbi.nlm.nih.gov/pubmed/1707670) | metadata signals extractable PD data (IC50) |
| `Natuzzi_1999.pdf` | Natuzzi D et al., Inactivation of the reconstituted oxogl…, Journal of bioenergetics an… (1999) | pd | 4 | [10.1023/a:1026414826457](https://doi.org/10.1023/a:1026414826457) | [10682911](https://www.ncbi.nlm.nih.gov/pubmed/10682911) | metadata signals extractable PD data (IC50) |
| `Orlický_1987.pdf` | Orlický J et al., Effects of sulfhydryl reagents on Na+-C…, General physiology and biop… (1987) | pd | 4 | not captured | [3653680](https://www.ncbi.nlm.nih.gov/pubmed/3653680) | metadata signals extractable PD data (IC50) |
| `Varecka_1986.pdf` | Varecka L et al., Inhibition by divalent cations and sulp…, Biochimica et biophysica ac… (1986) | pd | 4 | [10.1016/0005-2736(86)90151-3](https://doi.org/10.1016/0005-2736(86)90151-3) | [2421771](https://www.ncbi.nlm.nih.gov/pubmed/2421771) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T07:38:27.672755+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anner_1992 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on Na-K-ATPase inhibition and does not report pharmacokinetic parameters for mersalyl. |
| popPK | Beavis_1989 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on mitochondrial membrane binding sites, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Beavis_1991 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on mitochondrial membrane channels, not a pharmacokinetic study, and reports no disposition parameters for mersalyl. |
| PD | Beavis_1991 | not_relevant | 3 | 2 | The paper reports qualitative shifts in IC50 values for mitochondrial channel inhibitors upon mersalyl pretreatment, but does not provide specific numeric PD parameters or a quantitative exposure-response curve for mersalyl itself. |
| popPK | Jung_1997 | irrelevant | 0 | 0 | The paper is a mechanistic study on yeast mitochondrial permeability transition pores where mersalyl is used only as a tool compound to probe pore mechanisms, not as a subject for pharmacokinetic analysis. |
| PD | Jung_1997 | not_relevant | 0 | 0 | The paper describes mitochondrial biochemistry and pore regulation; mersalyl is mentioned only as a tool to inhibit Pi/OH- antiport, with no drug exposure-response or PD parameters reported. |
| popPK | Lalitha_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of selenium uptake in plant mitochondria where mersalyl is used only as a thiol inhibitor, not as the subject drug for PK analysis. |
| PD | Lalitha_1995 | not_relevant | 1 | 1 | The paper reports a qualitative inhibition percentage (40-60%) for mersalyl on selenium uptake but does not provide specific concentrations, dose-response curves, or numeric PD parameters (like IC50) for mersalyl. |
| popPK | Luger_1981 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion transport in rabbit colon epithelia, not a pharmacokinetic study reporting disposition parameters for mersalyl. |
| popPK | Martínez_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of taurine transport where mersalyl is used as a reagent, not a pharmacokinetic study of mersalyl disposition. |
| PD | Martínez_1994 | not_relevant | 2 | 1 | The paper reports qualitative effects of mersalyl on taurine efflux at fixed concentrations (0.5-1 mM) but does not provide a dose-response curve, IC50, or other numeric PD parameters for mersalyl. |
| popPK | Mavier_1975 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on enzyme inhibition, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Molina_1995 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on glutamine transport where mersalyl is used only as a thiol reagent/comparator, not as the subject drug for PK analysis. |
| PD | Molina_1995 | not_relevant | 0 | 0 | The paper reports that mersalyl did not significantly affect glutamine transport, providing no numeric dose-response or exposure-response relationship. |
| popPK | Natuzzi_1999 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| PD | Natuzzi_1999 | not_relevant | 0 | 0 | The paper studies the inactivation of a mitochondrial carrier by pyridoxal 5'-phosphate and does not mention mersalyl or report any pharmacodynamic or exposure-response data for it. |
| popPK | Oppedisano_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter inhibition, not a pharmacokinetic study reporting disposition parameters for mersalyl. |
| popPK | Orlický_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Na+-Ca2+ exchange inhibition and does not report any pharmacokinetic parameters for mersalyl. |
| popPK | Porzig_1970 | irrelevant | 0 | 0 | The study investigates calcium efflux kinetics in erythrocyte ghosts where mersalyl is used only as a reagent to remove inexchangeable calcium, not as the subject of pharmacokinetic analysis. |
| popPK | Powers_1991 | irrelevant | 0 | 0 | The paper is a mechanistic study on mitochondrial anion channels where mersalyl is used only as a chemical probe/comparator, not as a subject for pharmacokinetic analysis. |
| PD | Powers_1991 | not_relevant | 1 | 1 | The paper reports qualitative interactions and a 10-fold shift in IC50 for mersalyl, but does not provide numeric PD parameters (like specific IC50 values or Emax) or a concentration-effect curve for mersalyl itself. |
| popPK | Steib_1986 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on glutamine transport where mersalyl is used only as a thiol reagent inhibitor, not as the subject drug for PK analysis. |
| PD | Steib_1986 | not_relevant | 1 | 0 | The paper mentions mersalyl only as a qualitative inhibitor of glutamine transport without providing specific concentration-effect data or numeric PD parameters for mersalyl. |
| popPK | Stipani_1996 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on mitochondrial transport inhibition where mersalyl is used only as a chemical probe, with no pharmacokinetic parameters reported. |
| PD | Stipani_1996 | not_relevant | 0 | 0 | The paper investigates the mechanism of inhibition by arginine-specific reagents and notes that mersalyl failed to protect the carrier, but it does not report a concentration-effect relationship or numeric PD parameters for mersalyl itself. |
| popPK | Tse_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PAH uptake inhibition by mersalyl and analogs, reporting Ki values rather than pharmacokinetic disposition parameters. |
| popPK | Varecka_1986 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on calcium transport inhibition where mersalyl is used as a reagent, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
