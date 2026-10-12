<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;ensitrelvir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ensitrelvir_Ishibashi2024_mean&quot;,&quot;label&quot;:&quot;Ishibashi_2024_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_mean.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ensitrelvir_Ishibashi2024_median&quot;,&quot;label&quot;:&quot;Ishibashi_2024_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_median.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# ensitrelvir

- **generic name:** ensitrelvir
- **ATC codes:** `J05AE16`
- **DrugBank:** [DB18834](https://go.drugbank.com/drugs/DB18834) · **PubChem:** not captured
- **molar mass:** 531.88 g/mol (C22H17ClF3N9O2) — DrugBank
- **groups:** investigational

## About

Ensitrelvir is an investigational antiviral drug that works as a protease inhibitor. It is not yet an approved medicine in major regions such as the European Union and remains under investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q110798570](https://www.wikidata.org/wiki/Q110798570) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ensitrelvir | parent | 531.88 | C22H17ClF3N9O2 | DrugBank | — | Ishibashi_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:32 | 9:49 | 0/0/2 | 1/0/0 | 0/0/0 | 205,123/52,347 | openai / gpt-6-luna | 7 | 0/7 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.643). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T1_cmax</sub><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Ishibashi_2024_mean](drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_mean.md) | ▶ model + simulator | 1-compartment, oral | 6 | Ishibashi T et al., Population Pharmacokinetics of Ensitrel…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01446-4](https://doi.org/10.1007/s40262-024-01446-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: T1_cmax</sub><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Ishibashi_2024_median](drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_median.md) | ▶ model + simulator | 1-compartment, oral | 6 | Ishibashi T et al., Population Pharmacokinetics of Ensitrel…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01446-4](https://doi.org/10.1007/s40262-024-01446-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Yamaguchi_2024_Y](drugs/drug_ensitrelvir/pd_Yamaguchi_2024_Y.md) | viral load ← ensitrelvir · direct Emax (saturable) effect | — | Yamaguchi D et al., Modeling the Impact of Ensitrelvir on S…, Infectious diseases and the… (2024) | [10.1007/s40121-024-01046-6](https://doi.org/10.1007/s40121-024-01046-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Yamaguchi_2024_Y_2](drugs/drug_ensitrelvir/pd_Yamaguchi_2024_Y_2.md) | viral load ← ensitrelvir · direct Emax (saturable) effect | — | Yamaguchi D et al., Modeling the Impact of Ensitrelvir on S…, Infectious diseases and the… (2024) | [10.1007/s40121-024-01046-6](https://doi.org/10.1007/s40121-024-01046-6) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chaibi_2024 | irrelevant | 0 | 0 | This is an in-vitro inhibitor study and reports no ensitrelvir pharmacokinetic parameters. |
| popPK | Eltayb_2023 | irrelevant | 1 | 0 | This is an in vitro and computational antiviral study, with no quantitative ensitrelvir disposition parameters reported. |
| popPK | Jochmans_2023 | irrelevant | 0 | 0 | This is an in-vitro resistance study, reporting inhibitor potency rather than ensitrelvir disposition parameters. |
| popPK | McGovern-Gooch_2024 | irrelevant | 0 | 0 | The study characterizes AB-343 in vitro; ensitrelvir is only mentioned as a comparator and no ensitrelvir PK values are reported. |
| popPK | Shimizu_2023 | relevant | 7 | 2 | The study evaluates ensitrelvir pharmacokinetics and shows AUC values, but eligible disposition parameter values are not readable here. |
| popPK | Unoh_2025 | irrelevant | 0 | 0 | Ensitrelvir is only a comparator; the reported PK is for S-892216, with detailed values in tables not provided. |
| popPK | Yamaguchi_2024 | relevant | 8 | 0 | The human analysis uses an ensitrelvir population-PK model, but its parameter values are only referenced in supplementary Table S2, which is not provided. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | Ensitrelvir is only an antiviral comparator; the quantitative PK values shown are for other compounds. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:23 UTC</sub>
