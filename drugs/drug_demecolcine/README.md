<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;demecolcine&quot;}]"></div>

# demecolcine

- **generic name:** demecolcine
- **ATC codes:** `L01CC01`
- **DrugBank:** [DB13318](https://go.drugbank.com/drugs/DB13318)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 20:01 | 1:03 | 0/0/0 | 0/0/0 | 0/0/0 | 1,258/236 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 3/0 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=demecolcine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: MAP1A (modulator), MAP1B (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lopez_1997.pdf` | Lopez I et al., Effects of antimitotic agents on secret…, Cellular and molecular neur… (1997) | pd | 4 | [10.1023/a:1026350619823](https://doi.org/10.1023/a:1026350619823) | [9353587](https://www.ncbi.nlm.nih.gov/pubmed/9353587) | metadata signals extractable PD data (IC50) |
| `Urata_1985.pdf` | Urata C et al., Pharmacologic modulation of the IgE or…, International archives of a… (1985) | pd | 4 | [10.1159/000233869](https://doi.org/10.1159/000233869) | [2411672](https://www.ncbi.nlm.nih.gov/pubmed/2411672) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-15T20:01:44.151965+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2024 | irrelevant | 0 | 0 | The paper is a biodosimetry study using demecolcine as a cytogenetic reagent to arrest cells in metaphase, not a pharmacokinetic study of demecolcine. |
| PD | Agarwal_2024 | not_relevant | 0 | 0 | The paper uses demecolcine as a standard laboratory reagent to arrest cells in metaphase for cytogenetic analysis; it does not report any pharmacodynamic or exposure-response relationship for demecolcine itself. |
| PGx | Dvorák_2000 | not_relevant | 0 | 0 | The study investigates the effect of demecolcine on CYP enzyme protein levels in vitro, not the effect of gene variants on demecolcine pharmacokinetics or pharmacodynamics. |
| PGx | Loo_2003 | not_relevant | 0 | 0 | The paper investigates the structural mechanism of P-glycoprotein ATPase activity upon drug binding, not the effect of genetic variants on demecolcine pharmacokinetics or pharmacodynamics. |
| PGx | Loo_2003_2 | not_relevant | 0 | 0 | The paper describes the structural mechanism of P-gp binding to demecolcine but does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Loo_2003_3 | not_relevant | 0 | 0 | The paper investigates the mechanism of P-glycoprotein activation using a mutant protein and a chemical analog, not the effect of a human genetic variant on demecolcine pharmacokinetics or pharmacodynamics. |
| PGx | Loo_2003_4 | not_relevant | 0 | 0 | The paper investigates the structural binding mechanism of P-glycoprotein using mutagenesis and does not report pharmacogenomic effects on the PK or PD of demecolcine. |
| PGx | Loo_2006 | not_relevant | 0 | 0 | The paper investigates the structural role of P-gp TM1 in drug binding using mutagenesis and does not report pharmacogenomic effects on demecolcine PK/PD parameters. |
| popPK | Lopez_1997 | irrelevant | 0 | 0 | The paper focuses on the effects of antimitotic agents on adrenal receptors and does not report pharmacokinetic parameters for demecolcine. |
| PD | Lopez_1997 | not_relevant | 0 | 0 | The paper studies the effects of antimitotic agents on adrenal nicotinic receptors and does not mention demecolcine or report any pharmacodynamic or exposure-response data for it. |
| popPK | Scanlon_2004 | irrelevant | 0 | 0 | The paper is a mechanistic study on microsporidia infection where demecolcine is used only as a microtubule-disrupting agent, with no pharmacokinetic parameters reported. |
| PD | Scanlon_2004 | not_relevant | 0 | 0 | The paper discusses the structural relationship between mitochondria and the parasitophorous vacuole; demecolcine is mentioned only as a qualitative control for microtubule disruption, with no exposure-response or dose-response analysis or numeric PD parameters reported. |
| popPK | Starling_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pinocytosis inhibition and does not report any pharmacokinetic parameters for demecolcine. |
| PD | Starling_1983 | not_relevant | 2 | 1 | The text provides only qualitative comparisons of potency and mentions a delay in inhibition, but does not report specific numeric concentrations, IC50 values, or dose-response curves for demecolcine. |
| popPK | Urata_1985 | irrelevant | 0 | 0 | The paper focuses on cellular mechanisms of histamine release in rat basophilic leukemia cells and does not report pharmacokinetic parameters for demecolcine. |
| PD | Urata_1985 | not_relevant | 0 | 0 | The paper studies rat basophilic leukemia cells and does not mention demecolcine or report any pharmacodynamic parameters for it. |
| popPK | Yamaki_1982 | irrelevant | 0 | 0 | The paper studies the effects of geldanamycin on DNA synthesis in cell cultures and does not involve demecolcine or pharmacokinetic parameters. |
| PD | Yamaki_1982 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of geldanamycin (GDM), not demecolcine (which is only used as a synchronization agent). |
| popPK | Zeebul_2024 | irrelevant | 0 | 0 | The study is an in-vitro anticancer activity and molecular docking analysis where demecolcine is identified as a component of a plant extract, not a pharmacokinetic study. |
| PD | Zeebul_2024 | not_relevant | 2 | 1 | The paper reports IC50 values for a plant extract, not for demecolcine, and only provides a qualitative docking score for demecolcine without any concentration-effect data or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
