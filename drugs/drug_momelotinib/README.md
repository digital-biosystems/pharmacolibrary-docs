<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;momelotinib&quot;}]"></div>

# momelotinib

- **generic name:** momelotinib
- **ATC codes:** `L01EJ04`
- **DrugBank:** [DB11763](https://go.drugbank.com/drugs/DB11763) · **PubChem:** [CID 25062766](https://pubchem.ncbi.nlm.nih.gov/compound/25062766)
- **molar mass:** 414.469 g/mol (C23H22N6O2) — DrugBank
- **groups:** approved, investigational

## About

Momelotinib is a kinase inhibitor used to treat myelofibrosis. It is authorised in the European Union for myeloproliferative disorders such as splenomegaly.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q252602](https://www.wikidata.org/wiki/Q252602) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| momelotinib | parent | 414.469 | C23H22N6O2 | DrugBank | [25062766](https://pubchem.ncbi.nlm.nih.gov/compound/25062766) | Rich_2026 |
| M21 | metabolite | — (mass units only) | — | — | — | — |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 64.7 | L/h | 64.7 L/h | patients with myelofibrosis and healthy or special-population participants | 661 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_reference](drugs/drug_momelotinib/Momelotinib_Rich2026_reference.md) |
| V | V/F | 383 | L | 383 L | patients with myelofibrosis and healthy or special-population participants | 661 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_reference](drugs/drug_momelotinib/Momelotinib_Rich2026_reference.md) |
| ka | kabs | 8.63 | 1/h | 8.63 1/h | patients with myelofibrosis and healthy or special-population participants | 661 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_reference](drugs/drug_momelotinib/Momelotinib_Rich2026_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q351 — no SI value to build from</sub> | [Rich_2026_reference](drugs/drug_momelotinib/Momelotinib_Rich2026_reference.md) | — | parent + metabolite (no model) | 10 (+9 cov.) | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Rich_2026_TSS_percent_change](drugs/drug_momelotinib/pd_Rich_2026_TSS_percent_change.md) | TSS percent change from baseline at Week 24 ← total active moiety (TAM) · direct linear effect | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Rich_2026_TSS_percent_change_2](drugs/drug_momelotinib/pd_Rich_2026_TSS_percent_change_2.md) | TSS percent change from baseline at Week 24 ← momelotinib · direct linear effect | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Rich_2026_spleen_volume_percent_change](drugs/drug_momelotinib/pd_Rich_2026_spleen_volume_percent_change.md) | Spleen volume percent change from baseline at Week 24 ← total active moiety (TAM) · direct linear effect | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_TI](drugs/drug_momelotinib/pd_Rich_2026_TI.md) | TI response at Week 24 (JAK inhibitor–experienced only) ← total active moiety (TAM) · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_TI_2](drugs/drug_momelotinib/pd_Rich_2026_TI_2.md) | TI response at Week 24 (JAK inhibitor–experienced only) ← momelotinib · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_TSS_response](drugs/drug_momelotinib/pd_Rich_2026_TSS_response.md) | TSS response at Week 24 ← total active moiety (TAM) · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_TSS_response_2](drugs/drug_momelotinib/pd_Rich_2026_TSS_response_2.md) | TSS response at Week 24 ← momelotinib · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_anemia](drugs/drug_momelotinib/pd_Rich_2026_anemia.md) | Grade 3/4 anemia up to Week 24 ← total active moiety (TAM) · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_anemia_2](drugs/drug_momelotinib/pd_Rich_2026_anemia_2.md) | Grade 3/4 anemia up to Week 24 ← total active moiety (TAM) · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_diarrhea](drugs/drug_momelotinib/pd_Rich_2026_diarrhea.md) | Diarrhea (any grade) up to Week 24 ← total active moiety (TAM) · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_diarrhea_2](drugs/drug_momelotinib/pd_Rich_2026_diarrhea_2.md) | Diarrhea (any grade) up to Week 24 ← momelotinib · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_peripheral_neuropathy](drugs/drug_momelotinib/pd_Rich_2026_peripheral_neuropathy.md) | Peripheral neuropathy (any grade) up to Week 24 ← total active moiety (TAM) · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_peripheral_neuropathy_2](drugs/drug_momelotinib/pd_Rich_2026_peripheral_neuropathy_2.md) | Peripheral neuropathy (any grade) up to Week 24 ← momelotinib · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_spleen_response](drugs/drug_momelotinib/pd_Rich_2026_spleen_response.md) | Spleen volume response at Week 24 ← total active moiety (TAM) · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_spleen_response_2](drugs/drug_momelotinib/pd_Rich_2026_spleen_response_2.md) | Spleen volume response at Week 24 ← momelotinib · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_thrombocytopenia](drugs/drug_momelotinib/pd_Rich_2026_thrombocytopenia.md) | Grade ≥ 3 thrombocytopenia up to Week 24 ← total active moiety (TAM) · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rich_2026_thrombocytopenia_2](drugs/drug_momelotinib/pd_Rich_2026_thrombocytopenia_2.md) | Grade ≥ 3 thrombocytopenia up to Week 24 ← M21 · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:06 | 4:03 | 0/0/1 | 1/0/0 | 0/0/0 | 67,163/24,502 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 03:02 UTC</sub>
