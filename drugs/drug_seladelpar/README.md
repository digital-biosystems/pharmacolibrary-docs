<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05A&quot;,&quot;href&quot;:&quot;atc/A05A.md&quot;},{&quot;label&quot;:&quot;seladelpar&quot;}]"></div>

# seladelpar

- **generic name:** seladelpar
- **ATC codes:** `A05AX07`
- **DrugBank:** [DB12390](https://go.drugbank.com/drugs/DB12390) · **PubChem:** [CID 11236126](https://pubchem.ncbi.nlm.nih.gov/compound/11236126)
- **molar mass:** 444.47 g/mol (C21H23F3O5S) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Seladelpar is a peroxisome proliferator-activated receptor (PPAR)-delta (δ) agonist. Seladelpar is a single enantiomer of the R-configuration.[L51149] On August 14, 2024, seladelpar was granted accelerated approval by the FDA for the treatment of primary biliary cholangitis,[L51154] which is a condition associated with aberrant bile acid metabolism. Seladelpar works to block bile acid synthesis.[A264234]

**Indication.** Seladelpar is indicated for the treatment of primary biliary cholangitis (PBC) in combination with [ursodeoxycholic acid] (UDCA) in adults who have had an inadequate response to UDCA, or as monotherapy in patients unable to tolerate UDCA.[L51149] 

This indication is approved under accelerated approval and is subject to change. Use of seladelpar is not recommended in patients who have or develop decompensated cirrhosis (e.g., ascites, variceal bleeding, hepatic encephalopathy).[L51149]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:41 | 1:53 | 0/0/0 | 0/0/0 | 0/0/0 | 77,400/1,402 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 0/10 | 9/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=seladelpar) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…Biliary excretion of seladelpar was suggested by an animal study…”</sub> | prose |
| excretion | kidney | `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: PPARD (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 27 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alamgir_2026 | irrelevant | 0 | 0 | The paper is a clinical review of therapies for Primary Biliary Cholangitis and does not report quantitative pharmacokinetic parameters for seladelpar. |
| popPK | Ashraf_2025 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy (ALP/ALT levels) and safety, containing no pharmacokinetic parameters (CL, V, ka, etc.) for seladelpar. |
| popPK | Bolis_2026 | irrelevant | 0 | 0 | The text is a general review of Primary Biliary Cholangitis and does not mention seladelpar or any pharmacokinetic parameters. |
| popPK | Cetti_2025 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of lipid accumulation in HepG2 cells and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for seladelpar. |
| popPK | Cho_2025 | irrelevant | 0 | 0 | The paper is a narrative review of therapeutic options for Primary Biliary Cholangitis and does not report any quantitative pharmacokinetic parameters (CL, V, ka, etc.) for seladelpar. |
| popPK | Fiorucci_2024 | irrelevant | 0 | 0 | The paper is a review of bile acid-based therapies for PSC and mentions seladelpar only as a PPAR agonist under evaluation, without reporting any pharmacokinetic parameters. |
| popPK | Fiorucci_2024_2 | irrelevant | 0 | 0 | The paper is a review of Primary Biliary Cholangitis therapies and does not report quantitative pharmacokinetic parameters for seladelpar. |
| popPK | Floreani_2025 | irrelevant | 0 | 0 | The paper is a narrative review of investigational agents for primary biliary cholangitis and does not report original quantitative pharmacokinetic parameters for seladelpar. |
| popPK | Floreani_2025_2 | irrelevant | 0 | 0 | The paper is a clinical review of primary biliary cholangitis treatments and does not report any pharmacokinetic parameters for seladelpar. |
| popPK | Hirschfield_2023 | irrelevant | 0 | 0 | The paper is a Phase 3 clinical efficacy and safety study for seladelpar in primary biliary cholangitis and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Hirschfield_2024 | irrelevant | 0 | 0 | The paper is a Phase 3 clinical efficacy trial reporting biochemical response and pruritus scores, with no pharmacokinetic parameters (CL, V, ka, etc.) reported. |
| popPK | Honda_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PPAR coactivator recruitment and does not report any pharmacokinetic parameters for seladelpar. |
| popPK | Hoy_2024 | irrelevant | 0 | 0 | The paper is a regulatory approval summary (First Approval) and does not report original quantitative pharmacokinetic parameters or models for seladelpar. |
| popPK | Khoury_2025 | irrelevant | 2 | 0 | This is a narrative review of clinical efficacy and safety data, and the provided evidence contains no quantitative pharmacokinetic parameter values (CL, V, etc.). |
| popPK | Kremer_2024 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic biomarkers (IL-31, bile acids) and pruritus outcomes, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for seladelpar. |
| popPK | Levy_2023 | irrelevant | 0 | 0 | The paper is a narrative review of treatment paradigms in Primary Biliary Cholangitis and does not report any quantitative pharmacokinetic parameters for seladelpar. |
| popPK | Sohal_2026 | irrelevant | 0 | 0 | The paper is a narrative review of therapies for primary biliary cholangitis and does not report any quantitative pharmacokinetic parameters for seladelpar. |
| popPK | Vuppalanchi_2024 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| popPK | Vögelin_2025 | irrelevant | 0 | 0 | The paper is a narrative review of PBC therapies and does not report any quantitative pharmacokinetic parameters for seladelpar. |
| popPK | Warsop_2024 | irrelevant | 0 | 0 | The paper is a narrative review of PBC therapies that mentions seladelpar only as an emerging agent without reporting any pharmacokinetic parameters or numeric values. |
| PD | Warsop_2024 | not_relevant | 1 | 0 | The paper is a narrative review of therapies in PBC that mentions seladelpar only as an emerging agent without providing any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Yu_2026 | irrelevant | 2 | 0 | The paper is a review of drug-drug interactions (DDIs) and reports only relative exposure changes (AUC ratios) for seladelpar, not absolute quantitative disposition parameters (CL, V, ka, t1/2) or a population PK model. |
| PGx | Yu_2026 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (DDIs) for 2024 FDA approvals and mentions seladelpar only as a transporter substrate, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The paper discusses Elafibranor, not seladelpar, and does not report PD parameters for the target drug. |
| popPK | unknown_2025 | irrelevant | 0 | 0 | no_text gate: only 53 chars of text extracted (&lt; 400) |
| PD | unknown_2025 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, analysis, or numeric parameters to assess pharmacodynamic relationships. |
| popPK | unknown_2025_2 | irrelevant | 0 | 0 | no_text gate: only 17 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
