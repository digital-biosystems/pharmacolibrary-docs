<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;Apadamtase alfa&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ApadamtaseAlfa_McBride2025_reference&quot;,&quot;label&quot;:&quot;McBride_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_apadamtase_alfa/ApadamtaseAlfa_McBride2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ApadamtaseAlfa_Patel2025_estimate&quot;,&quot;label&quot;:&quot;Patel_2025_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_apadamtase_alfa/ApadamtaseAlfa_Patel2025_estimate.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ApadamtaseAlfa_Patel2025_shrinkage&quot;,&quot;label&quot;:&quot;Patel_2025_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_apadamtase_alfa/ApadamtaseAlfa_Patel2025_shrinkage.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# Apadamtase alfa

- **generic name:** Apadamtase alfa
- **ATC codes:** `B01AD13`
- **DrugBank:** [DB15164](https://go.drugbank.com/drugs/DB15164)
- **groups:** approved, investigational

## About

**Description.** Thrombotic thrombocytopenic purpura (TTP) is a rare blood clotting disorder characterized by thrombocytopenia, microangiopathic hemolytic anemia, and various degrees of organ damage.[A262076] It may be inherited (congenital TTP; cTTP) or acquired due to autoantibodies (immune-mediated TTP; iTTP), although cTTP accounts for <5% of all cases of TTP.[A262076] Patients with cTTP have a severe deficiency of a plasma metalloproteinase called ADAMTS13 (a disintegrin and metalloproteinase with a thrombospondin type 1 motif, member 13), which is responsible for cleaving large von Willebrand factor multimers and preventing the formation of microthrombi - this deficiency in ADAMTS13 is responsible for the microangiopathic complications associated with cTTP.[A262076] Standard therapy for cTTP involves prophylactic plasma infusions to supplement insufficient ADAMTS13 plasma levels.[A262071]

Apadamtase alfa, sold under the brand name Adzynma (ADAMTS13, recombinant-krhn), was approved by the FDA in November 2023 for use as an enzyme replacement therapy in patients with cTTP.[L48756]

**Indication.** Recombinant human ADAMTS13 is indicated for prophylactic or on-demand enzyme replacement therapy (ERT) in adult and pediatric patients with congenital thrombotic thrombocytopenic purpura (cTTP).[L48746]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 16:30 | 7:53 | 0/3/0 | 0/0/0 | 0/0/0 | 59,866/18,257 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 1/10 | 11/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [McBride_2025_reference](drugs/drug_apadamtase_alfa/ApadamtaseAlfa_McBride2025_reference.md) | McBride (2025) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Patel_2025_estimate](drugs/drug_apadamtase_alfa/ApadamtaseAlfa_Patel2025_estimate.md) | Patel M et al., Use of PopPK and E-R Analyses toward Ex…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3720](https://doi.org/10.1002/cpt.3720) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Patel_2025_shrinkage](drugs/drug_apadamtase_alfa/ApadamtaseAlfa_Patel2025_shrinkage.md) | Patel M et al., Use of PopPK and E-R Analyses toward Ex…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3720](https://doi.org/10.1002/cpt.3720) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=apadamtase_alfa) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: VWF (cleavage).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bendapudi_2024 | irrelevant | 0 | 0 | The paper describes a clinical case report of rADAMTS13 (not apadamtase_alfa) and does not report any pharmacokinetic parameters. |
| popPK | DeYoung_2022 | irrelevant | 0 | 0 | The paper is a mechanistic review of ADAMTS13 regulation and does not report quantitative population pharmacokinetic parameters for apadamtase_alfa. |
| popPK | Hafez_2022 | irrelevant | 0 | 0 | The paper is a clinical observational study on ADAMTS13 activity in COVID-19 patients and does not report pharmacokinetic parameters for apadamtase_alfa. |
| popPK | Hrdinová_2018 | irrelevant | 0 | 0 | The paper is a review of the immunopathogenesis of TTP focusing on ADAMTS13, not a pharmacokinetic study of apadamtase_alfa. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The paper studies recombinant ADAMTS-1, not apadamtase_alfa, and does not report PK parameters for the target drug. |
| popPK | Kwak_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of MDTCS and MDTCS-Fc (ADAMTS13 fragments), not apadamtase_alfa. |
| PGx | Liu-Chen_2018 | not_relevant | 0 | 0 | The paper describes an mRNA therapy for ADAMTS13, not the drug apadamtase_alfa, and does not report pharmacogenomic effects on its PK/PD. |
| popPK | Matsumoto_2021 | irrelevant | 0 | 0 | The paper is a review of TTP pathogenesis and treatments, does not focus on apadamtase_alfa, and contains no pharmacokinetic parameters. |
| popPK | Moore_2023 | irrelevant | 0 | 0 | The paper discusses ADAMTS13 antibody assays for TTP diagnosis and does not report pharmacokinetic parameters for apadamtase_alfa. |
| popPK | Pruss_2011 | irrelevant | 0 | 0 | The study focuses on von Willebrand factor (VWF) mutations and does not involve the drug apadamtase_alfa. |
| popPK | Rayes_2007 | irrelevant | 0 | 0 | The paper investigates the proteolysis of von Willebrand factor by ADAMTS-13 and does not involve the drug apadamtase_alfa or report any pharmacokinetic parameters. |
| popPK | Rossato_2023 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic and behavioral outcomes in a mouse model, and no quantitative pharmacokinetic parameter values (CL, V, etc.) are present in the provided evidence. |
| PD | Rossato_2023 | not_relevant | 4 | 2 | The paper describes a dose-dependent pharmacodynamic effect (reduction in VWF activity) in a mouse model, but the provided text lacks specific numeric concentration-effect parameters (e.g., EC50, Emax) or detailed PK/PD modeling data required for extraction. |
| popPK | Verbij_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of ADAMTS13 (not apadamtase_alfa) clearance by macrophages and does not report population pharmacokinetic parameters. |
| popPK | Weise_2025 | irrelevant | 2 | 3 | The paper is a case report on recombinant ADAMTS13 (not apadamtase_alfa) and only provides apparent half-life values without a full compartmental PK model or clearance/volume parameters for the target drug. |
| popPK | Wu_2018 | irrelevant | 0 | 0 | The paper studies the mechanism of VWF and ADAMTS-13 in traumatic brain injury and does not report pharmacokinetic parameters for apadamtase_alfa. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-06 16:29 UTC</sub>
