<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;miltefosine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Miltefosine_Dorlo2017_reference&quot;,&quot;label&quot;:&quot;Dorlo_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Miltefosine_Pali2020_reference&quot;,&quot;label&quot;:&quot;Pali\u0107_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Pali2020_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Miltefosine_Dorlo2008_reference&quot;,&quot;label&quot;:&quot;Dorlo_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Dorlo2008_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Miltefosine_Verrest2023_reference&quot;,&quot;label&quot;:&quot;Verrest_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Verrest2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# miltefosine

- **generic name:** miltefosine
- **ATC codes:** `P01CX04`
- **DrugBank:** [DB09031](https://go.drugbank.com/drugs/DB09031) · **PubChem:** [CID 3599](https://pubchem.ncbi.nlm.nih.gov/compound/3599)
- **molar mass:** 407.576 g/mol (C21H46NO4P) — DrugBank
- **groups:** approved, investigational

## About

Miltefosine is a phospholipid drug used as an antiprotozoal agent against leishmaniasis and trypanosomiasis, and it also has antifungal, antibacterial and anticancer activity. It is an approved medicine, included on the WHO essential medicines list, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411787](https://www.wikidata.org/wiki/Q411787) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| miltefosine | parent | 407.576 | C21H46NO4P | DrugBank | [3599](https://pubchem.ncbi.nlm.nih.gov/compound/3599) | Dorlo_2008, Dorlo_2017, Kip_2018, Madu_2023, Palić_2020, Verrest_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:33 | 12:19 | 2/2/4 | 3/0/0 | 0/0/0 | 511,414/70,880 | einfracz / qwen3.8-27b | 13 | 2/11 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Dorlo_2017_reference](drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference.md) | ▶ model + simulator | 2-compartment, oral | 9 | Dorlo TPC et al., Visceral leishmaniasis relapse hazard i…, The Journal of antimicrobia… (2017) | [10.1093/jac/dkx283](https://doi.org/10.1093/jac/dkx283) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Palić_2020_reference](drugs/drug_miltefosine/Miltefosine_Pali2020_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+1 cov.) | Palić S et al., Characterizing the non-linear pharmacok…, The Journal of antimicrobia… (2020) | [10.1093/jac/dkaa314](https://doi.org/10.1093/jac/dkaa314) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Dorlo_2008_reference](drugs/drug_miltefosine/Miltefosine_Dorlo2008_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Dorlo TP et al., Pharmacokinetics of miltefosine in Old…, Antimicrobial agents and ch… (2008) | [10.1128/AAC.00014-08](https://doi.org/10.1128/AAC.00014-08) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.846). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q67 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Madu_2023_initial_value](drugs/drug_miltefosine/Miltefosine_Madu2023_initial_value.md) | — | 1-compartment (no model) | 8 | Madu SJ et al., Assessing Dose-Exposure-Response Relati…, Pharmaceutical research (2023) | [10.1007/s11095-023-03610-0](https://doi.org/10.1007/s11095-023-03610-0) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.786). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49, Q67 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Madu_2023_optimised_final_value_for_adults_children](drugs/drug_miltefosine/Miltefosine_Madu2023_optimised_final_value_for_adults_childr.md) | — | 1-compartment (no model) | 8 | Madu SJ et al., Assessing Dose-Exposure-Response Relati…, Pharmaceutical research (2023) | [10.1007/s11095-023-03610-0](https://doi.org/10.1007/s11095-023-03610-0) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.538). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Verrest_2023_reference](drugs/drug_miltefosine/Miltefosine_Verrest2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+1 cov.) | Verrest L et al., Population pharmacokinetics of a combin…, The Journal of antimicrobia… (2023) | [10.1093/jac/dkad286](https://doi.org/10.1093/jac/dkad286) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Dorlo_2012_reference](drugs/drug_miltefosine/Miltefosine_Dorlo2012_reference.md) | — | 1-compartment (no model) | 0 | Dorlo TP et al., Optimal dosing of miltefosine in childr…, Antimicrobial agents and ch… (2012) | [10.1128/AAC.00292-12](https://doi.org/10.1128/AAC.00292-12) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Kip_2018_reference](drugs/drug_miltefosine/Miltefosine_Kip2018_reference.md) | — | 1-compartment (no model) | 3 | Kip AE et al., Simultaneous population pharmacokinetic…, The Journal of antimicrobia… (2018) | [10.1093/jac/dky143](https://doi.org/10.1093/jac/dky143) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Madu_2023_miltefosine_concentration_in_PBMCs](drugs/drug_miltefosine/pd_Madu_2023_miltefosine_concentration_in_PBMCs.md) | miltefosine concentration in PBMCs ← miltefosine · direct linear effect | — | Madu SJ et al., Assessing Dose-Exposure-Response Relati…, Pharmaceutical research (2023) | [10.1007/s11095-023-03610-0](https://doi.org/10.1007/s11095-023-03610-0) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Verrest_2024_EBASE](drugs/drug_miltefosine/pd_Verrest_2024_EBASE.md) | blood parasite load ← miltefosine · direct linear effect | model (no simulator) | Verrest L et al., Leishmania blood parasite dynamics duri…, PLoS neglected tropical dis… (2024) | [10.1371/journal.pntd.0012078](https://doi.org/10.1371/journal.pntd.0012078) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Voak_2018_CI](drugs/drug_miltefosine/pd_Voak_2018_CI.md) | Apparent intracellular concentration ← miltefosine · direct sigmoid Emax (Hill) effect | — | Voak AA et al., Pharmacodynamics and cellular accumulat…, The Journal of antimicrobia… (2018) | [10.1093/jac/dky014](https://doi.org/10.1093/jac/dky014) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Voak_2018_F_t](drugs/drug_miltefosine/pd_Voak_2018_F_t.md) | Fraction of infected cells ← miltefosine · direct sigmoid Emax (Hill) effect | — | Voak AA et al., Pharmacodynamics and cellular accumulat…, The Journal of antimicrobia… (2018) | [10.1093/jac/dky014](https://doi.org/10.1093/jac/dky014) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=miltefosine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: PLA2G1B (inhibitor), PLD1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 71 matched, 20 returned
- **screened:** 8  ·  **relevant:** 7
- **records:** 8  ·  extracted 2  ·  needs_review 4  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kip_2018.pdf` | Kip AE et al., Simultaneous population pharmacokinetic…, The Journal of antimicrobia… (2018) | popPK | 10 | [10.1093/jac/dky143](https://doi.org/10.1093/jac/dky143) | [29757380](https://pubmed.ncbi.nlm.nih.gov/29757380) | The paper reports a population PK model with specific values for the intracellular compartment (ratio and distribution rate), but key systemic parameters like clearance and volume are not explicitly provided in the text evidence. |
| `Dorlo_2012.pdf` | Dorlo TP et al., Optimal dosing of miltefosine in childr…, Antimicrobial agents and ch… (2012) | popPK | 9 | [10.1128/AAC.00292-12](https://doi.org/10.1128/AAC.00292-12) | [22585212](https://pubmed.ncbi.nlm.nih.gov/22585212) | The study reports quantitative population PK parameters (clearance BSV, Cmax) and dosing algorithms for miltefosine in humans. |
| `Dorlo_2014.pdf` | Dorlo TP et al., Failure of miltefosine in visceral leis…, The Journal of infectious d… (2014) | popPK | 8 | [10.1093/infdis/jiu039](https://doi.org/10.1093/infdis/jiu039) | [24443541](https://pubmed.ncbi.nlm.nih.gov/24443541) | The study describes a population PK model for miltefosine, but the evidence contains only PD outcomes (exposure duration) and no numeric PK parameter values (CL, V, ka, t1/2) are present in the text. |

<sub>queue written 2026-10-14T19:22:06.713069+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brannigan_2025 | irrelevant | 0 | 0 | The study characterizes the DUB16 enzyme from Leishmania donovani and compares the EC50 of a novel inhibitor to miltefosine, but contains no pharmacokinetic data for miltefosine. |
| popPK | Chu_2026 | relevant | 4 | 2 | The study reports skin-to-plasma ratios and target attainment but lacks standard quantitative PK disposition parameters (CL, V, t1/2) or a compartmental model. |
| popPK | Dorlo_2014 | relevant | 8 | 2 | The study describes a population PK model for miltefosine, but the evidence contains only PD outcomes (exposure duration) and no numeric PK parameter values (CL, V, ka, t1/2) are present in the text. |
| popPK | Henriquez-Figuereo_2023 | irrelevant | 0 | 0 | The paper is a mechanistic and in vitro pharmacological study of novel selenium compounds using miltefosine only as a reference comparator, with no PK parameters reported for miltefosine. |
| popPK | Kaur_2015 | irrelevant | 0 | 0 | The paper is a drug quality assurance study using NMR, MS, and in vitro bioassays to detect falsified miltefosine, and contains no pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Khamesipour_2025 | irrelevant | 0 | 0 | This is an in vitro susceptibility study measuring EC50/EC90 values for drug potency against Leishmania isolates, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Khoumeri_2024 | irrelevant | 0 | 0 | This is an in-vitro medicinal chemistry study on new antileishmanial compounds; miltefosine is used only as a reference comparator for activity (EC50), with no pharmacokinetic parameters reported. |
| popPK | Kip_2018 | relevant | 10 | 4 | The paper reports a population PK model with specific values for the intracellular compartment (ratio and distribution rate), but key systemic parameters like clearance and volume are not explicitly provided in the text evidence. |
| popPK | Seifert_2006 | irrelevant | 0 | 0 | The study reports pharmacodynamic interactions (FIC and AEI) rather than quantitative pharmacokinetic parameters for miltefosine. |
| popPK | Verrest_2024 | irrelevant | 2 | 0 | The study models parasite dynamics (PD) and uses a pre-existing miltefosine PK model as input, but does not report quantitative disposition parameters (CL, V, etc.) for miltefosine in the text. |
| popPK | Voak_2018 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamics and cellular accumulation experiment in macrophages, not a systemic or compartmental population pharmacokinetic study reporting disposition parameters like CL, V, or ka. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:26 UTC</sub>
