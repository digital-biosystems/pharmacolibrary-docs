<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12A&quot;,&quot;href&quot;:&quot;atc/A12A.md&quot;},{&quot;label&quot;:&quot;calcium glucoheptonate&quot;}]"></div>

# calcium glucoheptonate

- **generic name:** calcium glucoheptonate
- **ATC codes:** `A12AA10`
- **DrugBank:** [DB00326](https://go.drugbank.com/drugs/DB00326) · **PubChem:** [CID 62859](https://pubchem.ncbi.nlm.nih.gov/compound/62859)
- **molar mass:** 490.425 g/mol (C14H26CaO16) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Calcium supplements such as calcium gluceptate are taken by individuals who are unable to get enough calcium in their regular diet or who have a need for more calcium. They are used to prevent or treat several conditions that may cause hypocalcemia (not enough calcium in the blood). The body needs calcium to make strong bones. Calcium is also needed for the heart, muscles, and nervous system to work properly.

**Indication.** For treatment of mild hypocalcemia due to neonatal tetany, tetany due to parathyroid deficiency or vitamin D deficiency, and alkalosis, as prophylaxis of hypocalcemia during exchange transfusions, in the treatment of intestinal malabsorption, and to replenish electrolytes.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 23:53 | 0:49 | 0/0/0 | 0/0/0 | 0/0/0 | 2,142/188 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=calcium_glucoheptonate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Rapidly absorbed following oral administration.…”</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lister-James_1996.pdf` | Lister-James J et al., Thrombus imaging with a technetium-99m-…, Journal of nuclear medicine… (1996) | pd | 5 | not captured | [8965144](https://www.ncbi.nlm.nih.gov/pubmed/8965144) | metadata signals extractable PD data (IC50) |
| `Kairemo_1998.pdf` | Kairemo KJ et al., Expression profile of vascular cell adh…, Cell adhesion and communica… (1998) | pd | 4 | [10.3109/15419069809040301](https://doi.org/10.3109/15419069809040301) | [9762472](https://www.ncbi.nlm.nih.gov/pubmed/9762472) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-09-29T23:53:54.096154+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dewanjee_1979 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of stannous (tin) chelates, not the pharmacokinetics of calcium glucoheptonate, and reports no quantitative PK parameters. |
| PD | Dewanjee_1979 | not_relevant | 1 | 0 | The text provides only a qualitative description of the distribution and instability of tin chelates (including glucoheptonate) without reporting any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Kairemo_1998 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PD | Kairemo_1998 | not_relevant | 0 | 0 | The paper focuses on the expression profile of CD106 using a radiolabeled antibody in mice and does not report any pharmacodynamic or exposure-response relationship for calcium glucoheptonate. |
| popPK | Kerwin_2023 | irrelevant | 0 | 0 | The study is a nutritional trial in dairy cows evaluating performance and health outcomes, not a pharmacokinetic study, and reports no disposition parameters for calcium glucoheptonate. |
| popPK | León_2002 | irrelevant | 0 | 0 | The paper focuses on the synthesis and receptor binding of technetium complexes, using glucoheptonate only as a precursor, and does not report pharmacokinetic parameters for calcium glucoheptonate. |
| PD | León_2002 | not_relevant | 0 | 0 | The paper reports in vitro binding affinity (IC50) for radiotracers, not a pharmacodynamic exposure-response or dose-response relationship for calcium glucoheptonate. |
| popPK | Lister-James_1996 | irrelevant | 0 | 0 | The paper studies a radiolabeled peptide (99mTc-P280) for thrombus imaging, and calcium glucoheptonate is only mentioned as a labeling reagent, not as the subject drug for PK analysis. |
| PD | Lister-James_1996 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a peptide's receptor binding and in vivo biodistribution/imaging data for a radiotracer, but does not report a pharmacodynamic exposure-response or dose-response relationship for calcium glucoheptonate (which is used only as a labeling reagent). |
| popPK | Papagiannopoulou_2001 | irrelevant | 0 | 0 | The paper focuses on the synthesis and receptor binding of oxotechnetium complexes, using calcium glucoheptonate only as a precursor, and does not report pharmacokinetic parameters for calcium glucoheptonate. |
| PD | Papagiannopoulou_2001 | not_relevant | 0 | 0 | The paper reports the synthesis and characterization of novel 99mTc complexes for imaging, providing receptor binding IC50 values and preliminary biodistribution data, but it does not report a pharmacodynamic exposure-response or dose-response relationship for calcium glucoheptonate (which is used only as a precursor). |
| popPK | Tsoukalas_2003 | irrelevant | 0 | 0 | The paper focuses on the synthesis and characterization of oxorhenium/oxotechnetium complexes for 5-HT1A receptor imaging, where calcium_glucoheptonate is only mentioned as a precursor for radiolabeling, not as the subject drug for PK analysis. |
| PD | Tsoukalas_2003 | not_relevant | 0 | 0 | The paper reports the synthesis and characterization of oxorhenium/oxotechnetium complexes and a single IC50 value for receptor binding, but does not report a pharmacodynamic exposure-response or dose-response relationship for calcium glucoheptonate (which is only mentioned as a precursor). |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper is a radiochemistry study on peptide labeling where calcium glucoheptonate is used only as a precursor for ligand exchange, not as the subject drug for PK analysis. |
| PD | Wang_2021 | not_relevant | 0 | 0 | The paper reports radiochemistry and in vitro receptor binding affinity (IC50) for a somatostatin receptor antagonist, not a pharmacodynamic exposure-response or dose-response relationship for calcium glucoheptonate. |
| popPK | Welling_1975 | irrelevant | 0 | 0 | The paper is a review/modeling study of 22 drugs in renal failure and does not report original quantitative PK parameters for calcium_glucoheptonate. |
| popPK | del_1994 | irrelevant | 0 | 0 | The paper studies a radiolabeled cholinergic neuron marker (99mTc-DADT-benzovesamicol) and does not report pharmacokinetic parameters for calcium glucoheptonate. |
| PD | del_1994 | not_relevant | 0 | 0 | The paper reports the synthesis and biodistribution of a radiotracer (99mTc-DADT-benzovesamicol) and provides an IC50 for binding affinity, but it does not report a pharmacodynamic exposure-response or dose-response relationship for calcium glucoheptonate (which is used only as a labeling reagent). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
