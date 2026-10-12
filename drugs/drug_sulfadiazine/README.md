<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfadiazine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulfadiazine_Boulanger2024_reference&quot;,&quot;label&quot;:&quot;Boulanger_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/Sulfadiazine_Boulanger2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfadiazine_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfadiazine_Tajima2023v2_sdz&quot;,&quot;label&quot;:&quot;Tajima_2023_2_sdz&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# sulfadiazine

- **generic name:** sulfadiazine
- **ATC codes:** `J01EC02`, `J01EE02`, `J01EE06`
- **DrugBank:** [DB00359](https://go.drugbank.com/drugs/DB00359) · **PubChem:** [CID 5215](https://pubchem.ncbi.nlm.nih.gov/compound/5215)
- **molar mass:** 250.277 g/mol (C10H10N4O2S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Sulfadiazine is a sulfonamide antibiotic used to treat infections such as toxoplasmosis, urinary tract infections, nocardiosis, malaria, and gram-negative bacterial infections. It remains in use, is listed among WHO essential medicines, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2555060](https://www.wikidata.org/wiki/Q2555060) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sulfadiazine | parent | 250.277 | C10H10N4O2S | DrugBank | [5215](https://pubchem.ncbi.nlm.nih.gov/compound/5215) | Boulanger_2025, Ekstrand_2022, Ekstrand_2026, Tajima_2023_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:45 | 9:01 | 1/2/3 | 0/0/0 | 0/0/0 | 404,238/36,922 | einfracz / qwen3.8-27b | 15 | 0/8 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">bird</span> | [Boulanger_2024_reference](drugs/drug_sulfadiazine/Sulfadiazine_Boulanger2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Boulanger M et al., Pharmacokinetic modeling of sulfamethox…, Poultry science (2024) | [10.1016/j.psj.2024.104200](https://doi.org/10.1016/j.psj.2024.104200) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.95). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: T1_t_half_terminal</sub><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Ekstrand_2026_reference](drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference.md) | ▶ model + simulator | 3-compartment, oral | 7 | Ekstrand C et al., Comparative pharmacokinetics of trimeth…, BMC veterinary research (2026) | [10.1186/s12917-026-05604-7](https://doi.org/10.1186/s12917-026-05604-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: T1_tmax</sub><br><sub>blocking: T1_t_half_terminal</sub><br><sub>route_to: `scholar`</sub> | [Tajima_2023_2_sdz](drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz.md) | ▶ model + simulator | 1-compartment, oral | 11 | Tajima T et al., Oral pharmacokinetics of sulfadiazine a…, The Journal of veterinary m… (2023) | [10.1292/jvms.23-0110](https://doi.org/10.1292/jvms.23-0110) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Tajima_2023_2_smm](drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_smm.md) | — | 1-compartment (no model) | 2 | Tajima T et al., Oral pharmacokinetics of sulfadiazine a…, The Journal of veterinary m… (2023) | [10.1292/jvms.23-0110](https://doi.org/10.1292/jvms.23-0110) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Boulanger_2025_reference](drugs/drug_sulfadiazine/Sulfadiazine_Boulanger2025_reference.md) | — | general linear (no model) | 3 | Boulanger M et al., Population pharmacokinetic modeling of…, The veterinary quarterly (2025) | [10.1080/01652176.2025.2565351](https://doi.org/10.1080/01652176.2025.2565351) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Ekstrand_2022_reference](drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2022_reference.md) | — | general linear (no model) | 9 | Ekstrand C et al., The disposition of trimethoprim and sul…, Veterinary medicine and sci… (2022) | [10.1002/vms3.763](https://doi.org/10.1002/vms3.763) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 37 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 6  ·  extracted 1  ·  needs_review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shoaf_1986.pdf` | Shoaf SE et al., Pharmacokinetics of trimethoprim/sulfad…, Journal of veterinary pharm… (1986) | popPK | 9 | [10.1111/j.1365-2885.1986.tb00068.x](https://doi.org/10.1111/j.1365-2885.1986.tb00068.x) | [3806787](https://pubmed.ncbi.nlm.nih.gov/3806787) | The paper reports quantitative PK parameters (two-compartment model) for sulfadiazine in calves, but no specific numeric values are present in the provided evidence text. |
| `Swain_2020_2.pdf` | Swain O'Fallon E et al., Pharmacokinetics of a sulfadiazine and…, Journal of veterinary pharm… (2020) | popPK | 9 | [10.1111/jvp.12930](https://doi.org/10.1111/jvp.12930) | [33289123](https://pubmed.ncbi.nlm.nih.gov/33289123) | The paper reports PK parameters for sulfadiazine in neonatal foals, but explicit values for clearance and volume of distribution are not provided in the text (only t1/2, AUC, and Cmax). |
| `Jain_1992.pdf` | Jain SK et al., Pharmacokinetics and urinary excretion…, Annales de recherches veter… (1992) | popPK | 8 | not captured | [1476408](https://pubmed.ncbi.nlm.nih.gov/1476408) | The study reports PK parameters (half-lives, model type) for sulfadiazine in buffalo calves, but specific values for clearance (CL) or volume (V) are not explicitly listed in the provided abstract text. |
| `Shoaf_1987.pdf` | Shoaf SE et al., The effect of age and diet on sulfadiaz…, Journal of veterinary pharm… (1987) | popPK | 6 | [10.1111/j.1365-2885.1987.tb00110.x](https://doi.org/10.1111/j.1365-2885.1987.tb00110.x) | [3437496](https://pubmed.ncbi.nlm.nih.gov/3437496) | The study reports PK parameters for sulfadiazine in calves, including specific absorption half-life values (8.2-12.67 h) and tmax, but lacks explicit numerical values for clearance, volume of distribution, or systemic half-life in the provided text. |

<sub>queue written 2026-10-07T10:37:53.318980+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adeyemi_2024 | irrelevant | 0 | 0 | The study focuses on molecular modeling and in-vitro validation of a new inhibitor (C5), using sulfadiazine only as a standard comparator without reporting any pharmacokinetic parameters. |
| popPK | Anskjær_2013 | irrelevant | 0 | 0 | The study reports ecotoxicity (EC50) and bioconcentration factors in Daphnia magna, which are not pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| popPK | Dréano_2022 | irrelevant | 2 | 0 | The study measures residue concentrations in feathers, plasma, and droppings of chickens to assess environmental impact and resistance, but does not report quantitative pharmacokinetic parameters (CL, V, ka) or a PK model for sulfadiazine. |
| popPK | Elati_2026 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological screening study of new anti-parasitic compounds against Toxoplasma gondii, using sulfadiazine only as a positive control, and contains no pharmacokinetic parameters (CL, V, etc.) for sulfadiazine. |
| popPK | Krawczyk_2025 | irrelevant | 0 | 0 | The study is an ecotoxicological investigation of sulfadiazine effects on phytoplankton, not a pharmacokinetic study of the drug in an organism. |
| popPK | Luo_2025 | irrelevant | 0 | 0 | The study focuses on the abiotic degradation of sulfadiazine by a chemical oxidation system, not on its pharmacokinetics in biological subjects. |
| popPK | Mead_2026 | irrelevant | 0 | 0 | The study is a pharmacodynamic time-kill assay assessing antibiotic synergy, not a pharmacokinetic study reporting disposition parameters for sulfadiazine. |
| popPK | Qiu_2025 | irrelevant | 0 | 0 | The paper studies the anti-Toxoplasma activity of quisinostat, and sulfadiazine is only mentioned as a standard therapeutic comparator without any pharmacokinetic analysis. |
| popPK | Shoaf_1986 | relevant | 9 | 0 | The paper reports quantitative PK parameters (two-compartment model) for sulfadiazine in calves, but no specific numeric values are present in the provided evidence text. |
| popPK | Shoaf_1987 | relevant | 6 | 4 | The study reports PK parameters for sulfadiazine in calves, including specific absorption half-life values (8.2-12.67 h) and tmax, but lacks explicit numerical values for clearance, volume of distribution, or systemic half-life in the provided text. |
| popPK | Wollenberger_2000 | irrelevant | 0 | 0 | The study reports ecological toxicity (EC50/NOEC) in Daphnia magna, not pharmacokinetic disposition parameters. |
| popPK | da_2025 | irrelevant | 0 | 0 | The paper investigates the anti-parasitic activity of novel marinoquinolines, with sulfadiazine mentioned only as the current standard of care in the context of the disease, not as a subject of PK analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:38 UTC</sub>
