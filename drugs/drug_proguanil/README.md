<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;proguanil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Proguanil_Hussein1996_reference&quot;,&quot;label&quot;:&quot;Hussein_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/Proguanil_Hussein1996_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Proguanil_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/Proguanil_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Proguanil_McGready2003_reference&quot;,&quot;label&quot;:&quot;McGready_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/Proguanil_McGready2003_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# proguanil

- **generic name:** proguanil
- **ATC codes:** `P01BB01`, `P01BB51`, `P01BB52`
- **DrugBank:** [DB01131](https://go.drugbank.com/drugs/DB01131) · **PubChem:** [CID 4923](https://pubchem.ncbi.nlm.nih.gov/compound/4923)
- **molar mass:** 253.731 g/mol (C11H16ClN5) — DrugBank
- **groups:** approved

## About

Proguanil is an antimalarial drug used to treat and prevent malaria, especially falciparum malaria. It is widely used, often combined with other antimalarials, and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420607](https://www.wikidata.org/wiki/Q420607) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| proguanil | parent | 253.731 | C11H16ClN5 | DrugBank | [4923](https://pubchem.ncbi.nlm.nih.gov/compound/4923) | Hussein_1996, Khwarg_2024, McGready_2003 |
| chlorcycloguanil | metabolite | — (mass units only) | — | — | — | — |
| cycloguanil | metabolite | 288.17 | — | the paper | — | Khwarg_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:09 | 2:31 | 1/4/1 | 1/0/0 | 0/0/0 | 79,221/40,227 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Hussein_1996_reference](drugs/drug_proguanil/Proguanil_Hussein1996_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Hussein Z et al., Population pharmacokinetics of proguani…, British journal of clinical… (1996) | [10.1111/j.1365-2125.1996.tb00114.x](https://doi.org/10.1111/j.1365-2125.1996.tb00114.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.545). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Cherkaoui-Rbati_2023_reference](drugs/drug_proguanil/Proguanil_CherkaouiRbati2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Cherkaoui-Rbati MH et al., A pharmacokinetic-pharmacodynamic model…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12875](https://doi.org/10.1002/psp4.12875) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Khwarg_2024_reference](drugs/drug_proguanil/Proguanil_Khwarg2024_reference.md) | — | parent + metabolite (no model) | 9 | Khwarg J et al., Effect of SLC22A1 polymorphism on the p…, Clinical and translational… (2024) | [10.1111/cts.70103](https://doi.org/10.1111/cts.70103) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.273). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub><br><sub>route_to: `engineer`</sub> | [McGready_2003_reference](drugs/drug_proguanil/Proguanil_McGready2003_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | McGready R et al., The pharmacokinetics of atovaquone and…, European journal of clinica… (2003) | [10.1007/s00228-003-0652-9](https://doi.org/10.1007/s00228-003-0652-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.091). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Na-Bangchang_2005_reference](drugs/drug_proguanil/Proguanil_NaBangchang2005_reference.md) | — | parent + metabolite (no model) | 0 | Na-Bangchang K et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2005) | [10.1007/s00228-005-0969-7](https://doi.org/10.1007/s00228-005-0969-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Watkins_1987_reference](drugs/drug_proguanil/Proguanil_Watkins1987_reference.md) | — | general linear (no model) | 0 | Watkins WM et al., A preliminary pharmacokinetic study of…, The Journal of pharmacy and… (1987) | [10.1111/j.2042-7158.1987.tb06263.x](https://doi.org/10.1111/j.2042-7158.1987.tb06263.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lochner_2014_5_HT3_receptor_responses](drugs/drug_proguanil/pd_Lochner_2014_5_HT3_receptor_responses.md) | 5-HT3 receptor responses ← proguanil · inhibition effect | — | Lochner M et al., The antimalarial drug proguanil is an a…, The Journal of pharmacology… (2014) | [10.1124/jpet.114.218461](https://doi.org/10.1124/jpet.114.218461) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=proguanil).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PDF (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 6  ·  extracted 1  ·  needs_review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cella_2012.pdf` | Cella M et al., Dosing rationale for fixed-dose combina…, Clinical pharmacology and t… (2012) | popPK | 10 | [10.1038/clpt.2011.297](https://doi.org/10.1038/clpt.2011.297) | [22398964](https://pubmed.ncbi.nlm.nih.gov/22398964) | The paper describes a population PK model for proguanil but the provided evidence (abstract) does not contain the specific numeric parameter values (CL, V, etc.). |
| `Hussein_1996.pdf` | Hussein Z et al., Population pharmacokinetics of proguani…, British journal of clinical… (1996) | popPK | 10 | [10.1111/j.1365-2125.1996.tb00114.x](https://doi.org/10.1111/j.1365-2125.1996.tb00114.x) | [8951190](https://pubmed.ncbi.nlm.nih.gov/8951190) | The paper is a population pharmacokinetic study of proguanil in humans that reports specific numeric values for clearance and volume of distribution directly in the text. |
| `McGready_2003.pdf` | McGready R et al., The pharmacokinetics of atovaquone and…, European journal of clinica… (2003) | popPK | 10 | [10.1007/s00228-003-0652-9](https://doi.org/10.1007/s00228-003-0652-9) | [12955371](https://pubmed.ncbi.nlm.nih.gov/12955371) | The abstract explicitly reports quantitative population pharmacokinetic parameters (Cl/F, Vd/F, half-life) for proguanil in humans. |
| `Na-Bangchang_2005.pdf` | Na-Bangchang K et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2005) | popPK | 10 | [10.1007/s00228-005-0969-7](https://doi.org/10.1007/s00228-005-0969-7) | [16041597](https://pubmed.ncbi.nlm.nih.gov/16041597) | The abstract provides clear quantitative ranges for proguanil's PK parameters (V/F, CL/F, t1/2beta, Cmax) in pregnant women. |
| `Watkins_1987.pdf` | Watkins WM et al., A preliminary pharmacokinetic study of…, The Journal of pharmacy and… (1987) | popPK | 9 | [10.1111/j.2042-7158.1987.tb06263.x](https://doi.org/10.1111/j.2042-7158.1987.tb06263.x) | [2884288](https://pubmed.ncbi.nlm.nih.gov/2884288) | The paper reports quantitative PK parameters (rate constants) for the active metabolite of proguanil in humans. |

<sub>queue written 2026-10-15T03:07:11.790600+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cella_2012 | relevant | 10 | 0 | The paper describes a population PK model for proguanil but the provided evidence (abstract) does not contain the specific numeric parameter values (CL, V, etc.). |
| popPK | Cherkaoui-Rbati_2023 | irrelevant | 0 | 0 | The study focuses on the PKPD of DSM265, and proguanil is only mentioned as a comparator in the introduction. |
| popPK | Dipanjan_2017 | irrelevant | 0 | 0 | This is a review article discussing strategies for malaria resistance and mentions population pharmacokinetics only as a general factor for implementation, without providing specific quantitative PK parameters for proguanil. |
| popPK | Hussein_1997 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for atovaquone, not proguanil. |
| popPK | Lochner_2014 | irrelevant | 0 | 0 | The study investigates pharmacodynamic effects (5-HT3 receptor binding) in an in-vitro system, not pharmacokinetic disposition parameters. |
| popPK | Lütgendorf_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of antimalarial drug interactions and contains no pharmacokinetic data for proguanil. |
| popPK | McGready_2006 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dihydroartemisinin (DHA) and artesunate, with proguanil used only as a co-administered comparator drug rather than the subject of analysis. |
| popPK | Thapar_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of anti-malarial efficacy and drug interactions, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:08 UTC</sub>
