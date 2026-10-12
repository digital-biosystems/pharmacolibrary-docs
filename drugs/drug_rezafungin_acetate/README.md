<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;rezafungin acetate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;RezafunginAcetate_Lakota2018_reference&quot;,&quot;label&quot;:&quot;Lakota_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rezafungin_acetate/RezafunginAcetate_Lakota2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;RezafunginAcetate_Roepcke2023_reference&quot;,&quot;label&quot;:&quot;Roepcke_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rezafungin_acetate/RezafunginAcetate_Roepcke2023_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;RezafunginAcetate_Rubino2021_reference&quot;,&quot;label&quot;:&quot;Rubino_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rezafungin_acetate/RezafunginAcetate_Rubino2021_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;RezafunginAcetate_Zhao2020_reference&quot;,&quot;label&quot;:&quot;Zhao_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rezafungin_acetate/RezafunginAcetate_Zhao2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# rezafungin acetate

- **generic name:** rezafungin acetate
- **ATC codes:** `J02AX08`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Rezafungin acetate is an antifungal medicine used to treat invasive candida infections of the bloodstream. It is a newer antifungal that has been authorised in the United States but is not approved in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rezafungin | metabolite | 1226.39 | — | the paper | — | Roepcke_2023, Rubino_2021 |
| rezafungin_acetate | metabolite | 1285.46 | C65H88N8O19 | PubChem | [78318118](https://pubchem.ncbi.nlm.nih.gov/compound/78318118) | Roepcke_2023, Rubino_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:02 | 6:48 | 4/1/0 | 0/0/0 | 0/0/0 | 229,181/15,008 | einfracz / qwen3.8-27b | 10 | 1/9 | 9/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span> | [Lakota_2018_reference](drugs/drug_rezafungin_acetate/RezafunginAcetate_Lakota2018_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Lakota EA et al., Population Pharmacokinetic Analyses for…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.02603-17](https://doi.org/10.1128/AAC.02603-17) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub> | [Roepcke_2023_reference](drugs/drug_rezafungin_acetate/RezafunginAcetate_Roepcke2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 (+6 cov.) | Roepcke S et al., Population pharmacokinetic modeling and…, Antimicrobial agents and ch… (2023) | [10.1128/aac.00916-23](https://doi.org/10.1128/aac.00916-23) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.55). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub> | [Rubino_2021_reference](drugs/drug_rezafungin_acetate/RezafunginAcetate_Rubino2021_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 (+4 cov.) | Rubino CM et al., Population Pharmacokinetics of Rezafung…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.00842-21](https://doi.org/10.1128/AAC.00842-21) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.30).">human + animal</span> | [Zhao_2020_reference](drugs/drug_rezafungin_acetate/RezafunginAcetate_Zhao2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Zhao Y et al., Review of the Novel Echinocandin Antifu…, Journal of fungi (Basel, Sw… (2020) | [10.3390/jof6040192](https://doi.org/10.3390/jof6040192) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Albanell-Fernández_2025_reference](drugs/drug_rezafungin_acetate/RezafunginAcetate_AlbanellFernndez2025_reference.md) | — | 2-compartment (no model) | 3 | Albanell-Fernández M, Echinocandins Pharmacokinetics: A Compr…, Clinical pharmacokinetics (2025) | [10.1007/s40262-024-01461-5](https://doi.org/10.1007/s40262-024-01461-5) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 11 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 5  ·  extracted 4  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albanell-Fernández_2025 | relevant | 5 | 4 | This is a review article that reports a range of quantitative PK parameter values (CL and Vc) for rezafungin from three underlying population PK studies, though specific model equations and detailed statistics are deferred to supplementary material. |
| popPK | Branda_2025 | irrelevant | 0 | 0 | The paper is a review of antifungal agents that mentions rezafungin only as a "next-generation echinocandin" example in the abstract without reporting any quantitative pharmacokinetic parameters or values. |
| popPK | Fung_2025 | irrelevant | 0 | 0 | The provided text is a clinical summary/focus feature describing efficacy and safety outcomes, containing no quantitative pharmacokinetic parameter values. |
| popPK | Hoenigl_2021 | irrelevant | 1 | 0 | This is a review article that provides only qualitative descriptions (e.g., "half-life of approximately 80 hours") without reporting quantitative compartmental parameters like CL, V, or Q for rezafungin. |
| popPK | Honoré_2024 | irrelevant | 2 | 1 | The paper is a clinical efficacy/safety analysis that only qualitatively compares rezafungin exposure measures (AUC, Cmax, Cmin) between ICU and non-ICU groups, with the specific numeric values located in Supplementary Material Table S3 which is not included in the evidence. |
| popPK | Scorzoni_2021 | irrelevant | 0 | 0 | The paper is a narrative review of pharmacotherapeutic options for candidiasis and does not contain original quantitative pharmacokinetic data for rezafungin. |
| popPK | Thompson_2021 | irrelevant | 2 | 1 | This is a clinical efficacy and safety trial (STRIVE) that reports clinical outcomes and time to culture conversion but does not provide quantitative population pharmacokinetic parameters (CL, V, etc.) for rezafungin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:58 UTC</sub>
