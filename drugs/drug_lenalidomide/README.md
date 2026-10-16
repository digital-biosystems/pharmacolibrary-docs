<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;lenalidomide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lenalidomide_Gupta2019_reference&quot;,&quot;label&quot;:&quot;Gupta_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenalidomide/Lenalidomide_Gupta2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lenalidomide_Papathanasiou2025_reference&quot;,&quot;label&quot;:&quot;Papathanasiou_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenalidomide/Lenalidomide_Papathanasiou2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lenalidomide_Liang2024_reference&quot;,&quot;label&quot;:&quot;Liang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenalidomide/Lenalidomide_Liang2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# lenalidomide

- **generic name:** lenalidomide
- **ATC codes:** `L04AX04`
- **DrugBank:** [DB00480](https://go.drugbank.com/drugs/DB00480) · **PubChem:** [CID 216326](https://pubchem.ncbi.nlm.nih.gov/compound/216326)
- **molar mass:** 259.2606 g/mol (C13H13N3O3) — DrugBank
- **groups:** approved, investigational

## About

Lenalidomide is an immunomodulating and anti-angiogenic drug used to treat blood cancers and related disorders, including multiple myeloma, myelodysplastic syndromes, and several types of lymphoma and leukemia. It is approved and widely used, with several authorised products in the European Union, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425681](https://www.wikidata.org/wiki/Q425681) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lenalidomide | parent | 259.261 | C13H13N3O3 | DrugBank | [216326](https://pubchem.ncbi.nlm.nih.gov/compound/216326) | Hughes_2019, Kim_2026, Liang_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 04:17 | 3:44 | 2/2/2 | 1/0/1 | 0/0/0 | 253,543/13,841 | einfracz / qwen3.8-27b | 11 | 0/11 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span> | [Gupta_2019_reference](drugs/drug_lenalidomide/Lenalidomide_Gupta2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Gupta N et al., Clinical Pharmacology of Ixazomib: The…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0702-1](https://doi.org/10.1007/s40262-018-0702-1) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.846). Primary extraction retained.">cross-check: partial</span> | [Papathanasiou_2025_reference](drugs/drug_lenalidomide/Lenalidomide_Papathanasiou2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Papathanasiou T et al., Population Pharmacokinetics for Belanta…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01508-1](https://doi.org/10.1007/s40262-025-01508-1) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Kim_2026_reference](drugs/drug_lenalidomide/Lenalidomide_Kim2026_reference.md) | — | 2-compartment (no model) | 5 | Kim H et al., Population Pharmacokinetics and Model-I…, Drug design, development an… (2026) | [10.2147/DDDT.S605741](https://doi.org/10.2147/DDDT.S605741) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Liang_2024_reference](drugs/drug_lenalidomide/Lenalidomide_Liang2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Liang X et al., Population pharmacokinetics of lenalido…, Scientific reports (2024) | [10.1038/s41598-024-52460-2](https://doi.org/10.1038/s41598-024-52460-2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Guglieri-López_2017_reference](drugs/drug_lenalidomide/Lenalidomide_GuglieriLpez2017_reference.md) | — | 1-compartment (no model) | 0 | Guglieri-López B et al., Population pharmacokinetics of lenalido…, Cancer chemotherapy and pha… (2017) | [10.1007/s00280-016-3228-y](https://doi.org/10.1007/s00280-016-3228-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hughes_2019_reference](drugs/drug_lenalidomide/Lenalidomide_Hughes2019_reference.md) | — | 1-compartment (no model) | 4 | Hughes JH et al., Population pharmacokinetics of lenalido…, British journal of clinical… (2019) | [10.1111/bcp.13873](https://doi.org/10.1111/bcp.13873) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Koiwai_2021_M](drugs/drug_lenalidomide/pd_Koiwai_2021_M.md) | serum M-protein ← lenalidomide · disease-progression model | model (no simulator) | Koiwai K et al., PK/PD modeling analysis for dosing regi…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12666](https://doi.org/10.1002/psp4.12666) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Srimani_2022_platelet_count](drugs/drug_lenalidomide/pd_Srimani_2022_platelet_count.md) | platelet count ← lenalidomide · delayed effect through an effect compartment | model (no simulator) | Srimani JK et al., Population pharmacokinetic/pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12815](https://doi.org/10.1002/psp4.12815) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lenalidomide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CDH5 (target), CRBN (inhibitor), PTGS2 (negative modulator), TNF (inhibitor), TNFSF11 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 20 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 6  ·  extracted 2  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Connarn_2018.pdf` | Connarn JN et al., Population Pharmacokinetics of Lenalido…, Clinical pharmacology in dr… (2018) | popPK | 10 | [10.1002/cpdd.372](https://doi.org/10.1002/cpdd.372) | [28724202](https://pubmed.ncbi.nlm.nih.gov/28724202) | The paper describes a population PK model for lenalidomide in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided text. |
| `Guglieri-López_2017.pdf` | Guglieri-López B et al., Population pharmacokinetics of lenalido…, Cancer chemotherapy and pha… (2017) | popPK | 10 | [10.1007/s00280-016-3228-y](https://doi.org/10.1007/s00280-016-3228-y) | [28039509](https://pubmed.ncbi.nlm.nih.gov/28039509) | The paper is a population pharmacokinetic study of lenalidomide, but the specific numeric parameter values (CL, V, etc.) are not provided in the abstract evidence, likely residing in the full text or figures. |
| `Hughes_2019.pdf` | Hughes JH et al., Population pharmacokinetics of lenalido…, British journal of clinical… (2019) | popPK | 10 | [10.1111/bcp.13873](https://doi.org/10.1111/bcp.13873) | [30672004](https://pubmed.ncbi.nlm.nih.gov/30672004) | The paper presents a population pharmacokinetic model for lenalidomide in humans with clear numeric values for clearance, volume of distribution, and transit rate constants provided in the abstract. |

<sub>queue written 2026-10-15T04:14:29.985989+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Burckhardt_2020 | irrelevant | 0 | 0 | The paper describes simulation training for clinical trial conduct and does not report any pharmacokinetic parameters for lenalidomide. |
| popPK | Connarn_2018 | relevant | 10 | 2 | The paper describes a population PK model for lenalidomide in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided text. |
| popPK | Deng_2021 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of neuropathic pain and does not report pharmacokinetic disposition parameters for lenalidomide. |
| popPK | Guglieri-López_2017 | relevant | 10 | 0 | The paper is a population pharmacokinetic study of lenalidomide, but the specific numeric parameter values (CL, V, etc.) are not provided in the abstract evidence, likely residing in the full text or figures. |
| popPK | Gupta_2019 | irrelevant | 0 | 0 | The paper is a pharmacokinetic review of ixazomib, not lenalidomide; lenalidomide is only mentioned as a co-administered drug in combination therapy. |
| popPK | Ide_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for elotuzumab, not lenalidomide, which is only a co-administered drug. |
| popPK | Koiwai_2021 | relevant | 5 | 1 | The paper reports population PK parameters for lenalidomide in the context of a PK/PD study for isatuximab, but the specific numeric values are located in Table S2 (Supplementary Material), which is not included in the provided evidence. |
| popPK | Lagrue_2015 | irrelevant | 0 | 0 | The paper is an immunological/mechanistic study describing NK-cell activation and actin remodeling, not a pharmacokinetic study. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for pomalidomide, not lenalidomide, and lenalidomide is only mentioned as a prior treatment for the study population. |
| popPK | Papathanasiou_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of belantamab mafodotin, with lenalidomide mentioned only as a co-administered agent in combination trials. |
| popPK | Passey_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of elotuzumab, with lenalidomide serving only as a co-administered drug in the treatment regimen, and no PK parameters for lenalidomide are reported. |
| popPK | Passey_2018 | irrelevant | 0 | 0 | The paper is a review of the clinical pharmacology of elotuzumab, and lenalidomide is only mentioned as a co-administered drug, with no PK parameters reported for lenalidomide. |
| popPK | Rachedi_2022 | irrelevant | 0 | 0 | The study is an exposure-response analysis for isatuximab, and lenalidomide is only a co-administered agent, with no population pharmacokinetic parameters reported for lenalidomide. |
| popPK | Srimani_2022 | irrelevant | 0 | 0 | The study focuses on ixazomide pharmacokinetics and pharmacodynamics in multiple myeloma patients, with lenalidomide serving only as a background comparator drug in the combination regimen. |
| popPK | Steichert_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for enalapril and its metabolite enalaprilat, not for lenalidomide. |
| popPK | Takwale_2022 | irrelevant | 0 | 0 | The paper focuses on the structure-activity relationship and antitumor efficacy of novel GSPT1 degraders, with lenalidomide mentioned only as a reference example, and no pharmacokinetic parameters for lenalidomide are reported. |
| popPK | Xu_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of daratumumab, with lenalidomide serving only as a co-administered drug in the background regimen. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 04:14 UTC</sub>
