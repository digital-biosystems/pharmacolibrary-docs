<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;repotrectinib&quot;}]"></div>

# repotrectinib

- **generic name:** repotrectinib
- **ATC codes:** `L01EX28`
- **DrugBank:** [DB16826](https://go.drugbank.com/drugs/DB16826) · **PubChem:** not captured
- **molar mass:** 355.373 g/mol (C18H18FN5O2) — DrugBank
- **groups:** approved, investigational

## About

Repotrectinib is a protein kinase inhibitor used to treat non-small-cell lung cancer. It is an approved medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q123499554](https://www.wikidata.org/wiki/Q123499554) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| repotrectinib | parent | 355.373 | C18H18FN5O2 | DrugBank | — | Du_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:04 | 1:08 | 0/1/0 | 1/0/0 | 0/0/0 | 70,219/2,408 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.765). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Du_2025_reference](drugs/drug_repotrectinib/Repotrectinib_Du2025_reference.md) | — | 2-compartment (no model) | 6 (+7 cov.) | Du S et al., A Novel Empirical Autoinduction Model t…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70036](https://doi.org/10.1002/psp4.70036) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Du_2025_2_ORR](drugs/drug_repotrectinib/pd_Du_2025_2_ORR.md) | objective response rate ← repotrectinib · direct linear effect | — | Du S et al., Exposure-Response Analysis of Repotrect…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70102](https://doi.org/10.1002/psp4.70102) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> | [Du_2025_2_DRDIs](drugs/drug_repotrectinib/pd_Du_2025_2_DRDIs.md) | dose reduction or interruption due to AEs ← repotrectinib · time-to-event model | — | Du S et al., Exposure-Response Analysis of Repotrect…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70102](https://doi.org/10.1002/psp4.70102) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Du_2025_2_Gr2_NEAEs](drugs/drug_repotrectinib/pd_Du_2025_2_Gr2_NEAEs.md) | Gr2+ neurologic AEs ← repotrectinib · time-to-event model | — | Du S et al., Exposure-Response Analysis of Repotrect…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70102](https://doi.org/10.1002/psp4.70102) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Du_2025_2_Gr2_anemia](drugs/drug_repotrectinib/pd_Du_2025_2_Gr2_anemia.md) | Gr2+ anemia ← repotrectinib · time-to-event model | — | Du S et al., Exposure-Response Analysis of Repotrect…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70102](https://doi.org/10.1002/psp4.70102) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> | [Du_2025_2_Gr2_dizziness](drugs/drug_repotrectinib/pd_Du_2025_2_Gr2_dizziness.md) | Grade 2 or higher (Gr2+) dizziness ← repotrectinib · time-to-event model | — | Du S et al., Exposure-Response Analysis of Repotrect…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70102](https://doi.org/10.1002/psp4.70102) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Du_2025_2_Gr3_TEAEs](drugs/drug_repotrectinib/pd_Du_2025_2_Gr3_TEAEs.md) | Grade 3 or higher (Gr3+) treatment‐emergent adverse events (AEs) ← repotrectinib · time-to-event model | — | Du S et al., Exposure-Response Analysis of Repotrect…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70102](https://doi.org/10.1002/psp4.70102) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Du_2025_2_PFS](drugs/drug_repotrectinib/pd_Du_2025_2_PFS.md) | progression-free survival ← repotrectinib · time-to-event model | — | Du S et al., Exposure-Response Analysis of Repotrect…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70102](https://doi.org/10.1002/psp4.70102) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=repotrectinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C19` inducer, `CYP2C8` inducer, `CYP2C9` inducer, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inhibitor, `SLCO1B1` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC47A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: NTRK1 (inhibitor), NTRK2 (inhibitor), NTRK3 (inhibitor), ROS1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Du_2025_2 | irrelevant | 2 | 1 | This is an exposure-response (efficacy/safety) analysis that utilizes PK parameters from a previously published study, rather than reporting new quantitative disposition parameters (CL, V, etc.) in the text or tables provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:03 UTC</sub>
