<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;oxyphencyclimine&quot;}]"></div>

# oxyphencyclimine

- **generic name:** oxyphencyclimine
- **ATC codes:** `A03AA01`, `A03CA03`
- **DrugBank:** [DB00383](https://go.drugbank.com/drugs/DB00383) · **PubChem:** [CID 4642](https://pubchem.ncbi.nlm.nih.gov/compound/4642)
- **molar mass:** 344.4479 g/mol (C20H28N2O3) — DrugBank
- **groups:** approved

## About

**Description.** Oxyphencyclimine is an anticholinergic drug (trade name Daricon) used in treating peptic ulcers.

**Indication.** For the treatment of peptic ulcer disease and the relief of smooth muscle spasms in gastrointestinal disorders.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:49 | 1:21 | 0/0/0 | 0/0/0 | 0/0/0 | 60,073/1,100 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 1/9 | 9/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxyphencyclimine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM5 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 23 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berstad_1971 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Dong_2021 | irrelevant | 0 | 0 | The paper describes a biosensor for 5-HT2A receptors and does not involve oxyphencyclimine or its pharmacokinetics. |
| PD | Dong_2021 | not_relevant | 0 | 0 | The paper describes a biosensor for 5-HT2AR and does not mention oxyphencyclimine or report any pharmacodynamic parameters for it. |
| popPK | Dowling_2009 | irrelevant | 0 | 0 | The paper describes a residue analysis method for NSAIDs in bovine milk and does not study oxyphencyclimine or report pharmacokinetic parameters. |
| popPK | Erzunov_2023 | irrelevant | 0 | 0 | The paper reports crystal structures of phthalonitriles and contains no pharmacokinetic data for oxyphencyclimine. |
| popPK | Gelbrich_2020 | irrelevant | 0 | 0 | The paper describes the crystal structure and synthesis of febuxostat, not the pharmacokinetics of oxyphencyclimine. |
| popPK | Heathcote_1980 | irrelevant | 0 | 0 | The study is a comparative pharmacological assessment of antiacetylcholine activity (gastric acid inhibition, pupil dilatation) and does not report pharmacokinetic parameters for oxyphencyclimine. |
| popPK | Herrera-González_2009 | irrelevant | 0 | 0 | The paper is a crystallographic study of a synthetic chemical compound (diallyl 5-[(4-hexyloxyphenyl)imino-methyl]-m-phenylene dicarbonate) and contains no pharmacokinetic data for oxyphencyclimine. |
| popPK | Jiang_2011 | irrelevant | 0 | 0 | The paper describes the crystal structure of febuxostat, a different drug, and contains no pharmacokinetic data for oxyphencyclimine. |
| popPK | Joa_2023 | irrelevant | 0 | 0 | The paper describes the crystal structure of a conjugated oligomer and contains no pharmacokinetic data for oxyphencyclimine. |
| popPK | McKoy_2014 | irrelevant | 0 | 0 | The paper is a crystallographic study of a chalcone derivative and contains no pharmacokinetic data for oxyphencyclimine. |
| popPK | Morón_1984 | irrelevant | 0 | 0 | The study is a pharmacological investigation of cytoprotective effects in rats and does not report any pharmacokinetic parameters for oxyphencyclimine. |
| popPK | Myren_1973 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| popPK | Mózsik_1969 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| popPK | Navarrete-Vázquez_2008 | irrelevant | 0 | 0 | The paper is a crystallographic study of a benzimidazole derivative, not a pharmacokinetic study of oxyphencyclimine. |
| popPK | Olsen_1977 | irrelevant | 0 | 0 | The study uses oxyphencyclimine as a tool to suppress saliva flow in a candidosis model and does not report any pharmacokinetic parameters for the drug. |
| popPK | PIPER_1962 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (saliva flow and gastric secretion) rather than quantitative pharmacokinetic parameters (CL, V, t1/2) for oxyphencyclimine. |
| popPK | RIDER_1962 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| popPK | Schollmeyer_2014 | irrelevant | 0 | 0 | The paper is a crystallographic study of a chemical compound and contains no pharmacokinetic data for oxyphencyclimine. |
| popPK | VERAN_1964 | irrelevant | 0 | 0 | no_text gate: only 97 chars of text extracted (&lt; 400) |
| popPK | Waelbroeck_1992 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study reporting affinity constants (pKi), not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Wallach_2023 | irrelevant | 0 | 0 | The paper focuses on 5-HT2A receptor signaling and psychedelic potential in mice, with no mention of oxyphencyclimine or its pharmacokinetics. |
| PD | Wallach_2023 | not_relevant | 0 | 0 | The paper focuses on 5-HT2A receptor signaling and psychedelic potential of novel ligands; oxyphencyclimine is not mentioned or studied. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
