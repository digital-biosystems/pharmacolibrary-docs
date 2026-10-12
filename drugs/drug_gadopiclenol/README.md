<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;trofinetide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trofinetide_Darwish2025_reference&quot;,&quot;label&quot;:&quot;Darwish_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trofinetide/Trofinetide_Darwish2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trofinetide_Darwish2025v2_reference&quot;,&quot;label&quot;:&quot;Darwish_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# gadopiclenol

- **generic name:** gadopiclenol
- **ATC codes:** `V08CA12`
- **DrugBank:** [DB17084](https://go.drugbank.com/drugs/DB17084) · **PubChem:** not captured
- **molar mass:** 970.1 g/mol (C35H54GdN7O15) — DrugBank
- **groups:** approved, investigational

## About

Gadopiclenol is a gadolinium-based contrast agent used to improve images in magnetic resonance imaging. It is authorised in the European Union and is a newer agent, so it is not yet widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q114748523](https://www.wikidata.org/wiki/Q114748523) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| gadopiclenol | parent | 970.1 | C35H54GdN7O15 | DrugBank | — | Eto_2025, Jurkiewicz_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:03 | 2:37 | 0/1/2 | 1/0/0 | 0/0/0 | 128,038/8,608 | ollama / glm-5.3-flash | 4 | 1/3 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Darwish_2025_reference](drugs/drug_trofinetide/Trofinetide_Darwish2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+9 cov.) | Darwish M et al., Population Pharmacokinetic Modeling to…, Advances in therapy (2025) | [10.1007/s12325-024-03056-9](https://doi.org/10.1007/s12325-024-03056-9) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.71). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Darwish_2025_2_reference](drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+6 cov.) | Darwish M et al., Population Pharmacokinetics of Trofinet…, Advances in therapy (2025) | [10.1007/s12325-024-03058-7](https://doi.org/10.1007/s12325-024-03058-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Oosterholt_2017_reference](drugs/drug_trofinetide/Trofinetide_Oosterholt2017_reference.md) | — | 1-compartment (no model) | 0 | Oosterholt SP et al., Population pharmacokinetics of NNZ-2566…, European journal of pharmac… (2017) | [10.1016/j.ejps.2017.05.032](https://doi.org/10.1016/j.ejps.2017.05.032) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span> | [Darwish_2024_CSBS_DP_IT](drugs/drug_trofinetide/pd_Darwish_2024_CSBS_DP_IT.md) | CSBS-DP-IT Social Composite score ← trofinetide · direct linear effect | model (no simulator) | Darwish M et al., Exposure-Response Efficacy Modeling to…, Advances in therapy (2024) | [10.1007/s12325-024-02796-y](https://doi.org/10.1007/s12325-024-02796-y) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed</span> | [Darwish_2024_RSBQ](drugs/drug_trofinetide/pd_Darwish_2024_RSBQ.md) | RSBQ total score ← trofinetide · direct linear effect | model (no simulator) | Darwish M et al., Exposure-Response Efficacy Modeling to…, Advances in therapy (2024) | [10.1007/s12325-024-02796-y](https://doi.org/10.1007/s12325-024-02796-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span> | [Darwish_2024_RTT_COMC](drugs/drug_trofinetide/pd_Darwish_2024_RTT_COMC.md) | RTT-COMC score ← trofinetide · categorical (graded) response model | — | Darwish M et al., Exposure-Response Efficacy Modeling to…, Advances in therapy (2024) | [10.1007/s12325-024-02796-y](https://doi.org/10.1007/s12325-024-02796-y) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=gadopiclenol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hao_2019 | irrelevant | 2 | 2 | The study reports Cmax and half-life, but no clearance, volume, or compartmental/population-PK model values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:14 UTC</sub>
