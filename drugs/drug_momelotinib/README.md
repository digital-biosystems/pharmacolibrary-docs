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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:06 | 4:03 | 0/0/1 | 1/0/0 | 0/0/0 | 67,163/24,502 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.676). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q351 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Rich_2026_reference](drugs/drug_momelotinib/Momelotinib_Rich2026_reference.md) | — | parent + metabolite (no model) | 10 (+9 cov.) | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_TSS_percent_change](drugs/drug_momelotinib/pd_Rich_2026_TSS_percent_change.md) | TSS percent change from baseline at Week 24 ← total active moiety (TAM) · direct linear effect | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_TSS_percent_change_2](drugs/drug_momelotinib/pd_Rich_2026_TSS_percent_change_2.md) | TSS percent change from baseline at Week 24 ← momelotinib · direct linear effect | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_spleen_volume_percent_change](drugs/drug_momelotinib/pd_Rich_2026_spleen_volume_percent_change.md) | Spleen volume percent change from baseline at Week 24 ← total active moiety (TAM) · direct linear effect | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_TI](drugs/drug_momelotinib/pd_Rich_2026_TI.md) | TI response at Week 24 (JAK inhibitor–experienced only) ← total active moiety (TAM) · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_TI_2](drugs/drug_momelotinib/pd_Rich_2026_TI_2.md) | TI response at Week 24 (JAK inhibitor–experienced only) ← momelotinib · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_TSS_response](drugs/drug_momelotinib/pd_Rich_2026_TSS_response.md) | TSS response at Week 24 ← total active moiety (TAM) · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_TSS_response_2](drugs/drug_momelotinib/pd_Rich_2026_TSS_response_2.md) | TSS response at Week 24 ← momelotinib · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_anemia](drugs/drug_momelotinib/pd_Rich_2026_anemia.md) | Grade 3/4 anemia up to Week 24 ← total active moiety (TAM) · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_anemia_2](drugs/drug_momelotinib/pd_Rich_2026_anemia_2.md) | Grade 3/4 anemia up to Week 24 ← total active moiety (TAM) · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_diarrhea](drugs/drug_momelotinib/pd_Rich_2026_diarrhea.md) | Diarrhea (any grade) up to Week 24 ← total active moiety (TAM) · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_diarrhea_2](drugs/drug_momelotinib/pd_Rich_2026_diarrhea_2.md) | Diarrhea (any grade) up to Week 24 ← momelotinib · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_peripheral_neuropathy](drugs/drug_momelotinib/pd_Rich_2026_peripheral_neuropathy.md) | Peripheral neuropathy (any grade) up to Week 24 ← total active moiety (TAM) · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_peripheral_neuropathy_2](drugs/drug_momelotinib/pd_Rich_2026_peripheral_neuropathy_2.md) | Peripheral neuropathy (any grade) up to Week 24 ← momelotinib · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_spleen_response](drugs/drug_momelotinib/pd_Rich_2026_spleen_response.md) | Spleen volume response at Week 24 ← total active moiety (TAM) · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_spleen_response_2](drugs/drug_momelotinib/pd_Rich_2026_spleen_response_2.md) | Spleen volume response at Week 24 ← momelotinib · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_thrombocytopenia](drugs/drug_momelotinib/pd_Rich_2026_thrombocytopenia.md) | Grade ≥ 3 thrombocytopenia up to Week 24 ← total active moiety (TAM) · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rich_2026_thrombocytopenia_2](drugs/drug_momelotinib/pd_Rich_2026_thrombocytopenia_2.md) | Grade ≥ 3 thrombocytopenia up to Week 24 ← M21 · categorical (graded) response model | — | Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=momelotinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `UGT1A9` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` inhibitor, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP3A4` substrate, `SLCO1B1` substrate, `SLCO1B3` substrate, `UGT1A1` inducer/inhibitor, `UGT1A9` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` inducer/inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ACVR1 (inhibitor), FLT3 (inhibitor), JAK1 (inhibitor), JAK2 (inhibitor), JAK3 (inhibitor), TYK2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:02 UTC</sub>
