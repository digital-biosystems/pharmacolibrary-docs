<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01A&quot;,&quot;href&quot;:&quot;atc/P01A.md&quot;},{&quot;label&quot;:&quot;atovaquone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atovaquone_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atovaquone/Atovaquone_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# atovaquone

- **generic name:** atovaquone
- **ATC codes:** `P01AX06`, `P01BB51`
- **DrugBank:** [DB01117](https://go.drugbank.com/drugs/DB01117) · **PubChem:** [CID 74989](https://pubchem.ncbi.nlm.nih.gov/compound/74989)
- **molar mass:** 366.837 g/mol (C22H19ClO3) — DrugBank
- **groups:** approved, investigational

## About

Atovaquone is an antiprotozoal medicine used against infections such as babesiosis and pneumocystosis, and also serves as an antimalarial including for malaria prevention. It is an approved drug in general clinical use, available both alone and in combination with other antimalarials.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418179](https://www.wikidata.org/wiki/Q418179) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| atovaquone | parent | 366.837 | C22H19ClO3 | DrugBank | [74989](https://pubchem.ncbi.nlm.nih.gov/compound/74989) | Hussein_1997, McGready_2003 |
| cycloguanil | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:25 | 8:22 | 0/2/2 | 5/0/0 | 0/0/0 | 461,613/29,267 | ollama / glm-5.3-flash | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Cherkaoui-Rbati_2023_reference](drugs/drug_atovaquone/Atovaquone_CherkaouiRbati2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Cherkaoui-Rbati MH et al., A pharmacokinetic-pharmacodynamic model…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12875](https://doi.org/10.1002/psp4.12875) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [McGready_2003_reference](drugs/drug_atovaquone/Atovaquone_McGready2003_reference.md) | — | parent + metabolite (no model) | 5 | McGready R et al., The pharmacokinetics of atovaquone and…, European journal of clinica… (2003) | [10.1007/s00228-003-0652-9](https://doi.org/10.1007/s00228-003-0652-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.231). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hussein_1997_reference](drugs/drug_atovaquone/Atovaquone_Hussein1997_reference.md) | — | 1-compartment (no model) | 5 | Hussein Z et al., Population pharmacokinetics of atovaquo…, Clinical pharmacology and t… (1997) | [10.1016/S0009-9236(97)90132-6](https://doi.org/10.1016/S0009-9236(97)90132-6) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.188). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Na-Bangchang_2005_reference](drugs/drug_atovaquone/Atovaquone_NaBangchang2005_reference.md) | — | parent + metabolite (no model) | 0 | Na-Bangchang K et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2005) | [10.1007/s00228-005-0969-7](https://doi.org/10.1007/s00228-005-0969-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Batiha_2019_RFU](drugs/drug_atovaquone/pd_Batiha_2019_RFU.md) | Growth inhibition of B. bovis (relative fluorescence units) ← atovaquone · inhibition effect | — | Batiha GE et al., Evaluation of the inhibitory effect of…, Tropical medicine and health (2019) | [10.1186/s41182-019-0171-8](https://doi.org/10.1186/s41182-019-0171-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Batiha_2019_RFU_2](drugs/drug_atovaquone/pd_Batiha_2019_RFU_2.md) | Growth inhibition of B. bigemina (relative fluorescence units) ← atovaquone · inhibition effect | — | Batiha GE et al., Evaluation of the inhibitory effect of…, Tropical medicine and health (2019) | [10.1186/s41182-019-0171-8](https://doi.org/10.1186/s41182-019-0171-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Batiha_2019_RFU_3](drugs/drug_atovaquone/pd_Batiha_2019_RFU_3.md) | Growth inhibition of B. divergens (relative fluorescence units) ← atovaquone · inhibition effect | — | Batiha GE et al., Evaluation of the inhibitory effect of…, Tropical medicine and health (2019) | [10.1186/s41182-019-0171-8](https://doi.org/10.1186/s41182-019-0171-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Batiha_2019_RFU_4](drugs/drug_atovaquone/pd_Batiha_2019_RFU_4.md) | Growth inhibition of B. caballi (relative fluorescence units) ← atovaquone · inhibition effect | — | Batiha GE et al., Evaluation of the inhibitory effect of…, Tropical medicine and health (2019) | [10.1186/s41182-019-0171-8](https://doi.org/10.1186/s41182-019-0171-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Batiha_2019_RFU_5](drugs/drug_atovaquone/pd_Batiha_2019_RFU_5.md) | Growth inhibition of T. equi (relative fluorescence units) ← atovaquone · inhibition effect | — | Batiha GE et al., Evaluation of the inhibitory effect of…, Tropical medicine and health (2019) | [10.1186/s41182-019-0171-8](https://doi.org/10.1186/s41182-019-0171-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Smith_2023_ratiometric_lum](drugs/drug_atovaquone/pd_Smith_2023_ratiometric_lum.md) | ratiometric luminescence (fLuc/nLuc) of bradyzoites ← atovaquone · direct sigmoid Emax (Hill) effect | — | Smith D et al., A High-Throughput Amenable Dual Lucifer…, Analytical chemistry (2023) | [10.1021/acs.analchem.2c02174](https://doi.org/10.1021/acs.analchem.2c02174) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Thapar_2003_P_falciparum_growth_inhibition_log_concentration_response_probit](drugs/drug_atovaquone/pd_Thapar_2003_P_falciparum_growth_inhibition_log_concentration.md) | P. falciparum growth inhibition (log-concentration/response probit) ← atovaquone · direct log-linear effect | — | Thapar MM et al., Pharmacodynamic interactions among atov…, Transactions of the Royal S… (2003) | [10.1016/s0035-9203(03)90162-3](https://doi.org/10.1016/s0035-9203(03)90162-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Yang_2020_FIPV_CPE](drugs/drug_atovaquone/pd_Yang_2020_FIPV_CPE.md) | Cytopathic effect inhibition of FIPV (visual assay) ← atovaquone · inhibition effect | — | Yang CW et al., Repurposing old drugs as antiviral agen…, Biomedical journal (2020) | [10.1016/j.bj.2020.05.003](https://doi.org/10.1016/j.bj.2020.05.003) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Yang_2020_HCoV_OC43_IFA](drugs/drug_atovaquone/pd_Yang_2020_HCoV_OC43_IFA.md) | HCoV-OC43 nucleocapsid protein expression inhibition (IFA) ← atovaquone · inhibition effect | — | Yang CW et al., Repurposing old drugs as antiviral agen…, Biomedical journal (2020) | [10.1016/j.bj.2020.05.003](https://doi.org/10.1016/j.bj.2020.05.003) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Zhou_2026_Efficacy_against_Gyrodactylus_kobayashii_parasite_response_to_bath_exposure](drugs/drug_atovaquone/pd_Zhou_2026_Efficacy_against_Gyrodactylus_kobayashii_parasite_.md) | Efficacy against Gyrodactylus kobayashii (parasite response to bath exposure) ← atovaquone · direct Emax (saturable) effect | — | Zhou S et al., Atovaquone as a potent and safe anthelm…, Veterinary parasitology (2026) | [10.1016/j.vetpar.2026.110813](https://doi.org/10.1016/j.vetpar.2026.110813) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 31 matched, 17 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hussein_1997.pdf` | Hussein Z et al., Population pharmacokinetics of atovaquo…, Clinical pharmacology and t… (1997) | popPK | 10 | [10.1016/S0009-9236(97)90132-6](https://doi.org/10.1016/S0009-9236(97)90132-6) | [9164414](https://pubmed.ncbi.nlm.nih.gov/9164414) | Population PK model of atovaquone with full numeric CL/F, V/F, and t1/2 estimates reported directly in the abstract. |
| `McGready_2003.pdf` | McGready R et al., The pharmacokinetics of atovaquone and…, European journal of clinica… (2003) | popPK | 10 | [10.1007/s00228-003-0652-9](https://doi.org/10.1007/s00228-003-0652-9) | [12955371](https://pubmed.ncbi.nlm.nih.gov/12955371) | Population PK parameters (Cl/F, Vd/F, half-life) for atovaquone are reported directly in the abstract. |
| `Na-Bangchang_2005.pdf` | Na-Bangchang K et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2005) | popPK | 10 | [10.1007/s00228-005-0969-7](https://doi.org/10.1007/s00228-005-0969-7) | [16041597](https://pubmed.ncbi.nlm.nih.gov/16041597) | Population/compartmental PK of atovaquone with numeric V/F, CL/F, and t½β reported directly in the abstract. |
| `Cella_2012_2.pdf` | Cella M et al., Dosing rationale for fixed-dose combina…, Clinical pharmacology and t… (2012) | popPK | 8 | [10.1038/clpt.2011.297](https://doi.org/10.1038/clpt.2011.297) | [22398964](https://pubmed.ncbi.nlm.nih.gov/22398964) | Population PK model of atovaquone in adults and children is the subject, but no numeric parameter values appear in the evidence (likely in tables/supplement not provided). |

<sub>queue written 2026-10-07T05:17:46.895763+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Batiha_2019 | irrelevant | 0 | 0 | This is an in-vitro/in-vivo efficacy study of ivermectin against Babesia/Theileria; atovaquone is only a comparator drug with IC50 values, no PK disposition parameters. |
| popPK | Cella_2012_2 | relevant | 8 | 2 | Population PK model of atovaquone in adults and children is the subject, but no numeric parameter values appear in the evidence (likely in tables/supplement not provided). |
| popPK | Cherkaoui-Rbati_2023 | irrelevant | 0 | 0 | The PK/PD model and parameters (CL, Q1, EC50) all pertain to DSM265, not atovaquone, which is only mentioned as a comparator prophylactic. |
| popPK | Dipanjan_2017 | irrelevant | 1 | 0 | This is a narrative review on drug-resistance strategies with no quantitative PK parameters for atovaquone reported. |
| popPK | El-Saber_2020 | irrelevant | 0 | 0 | This is an in-vitro/in-vivo antiparasitic efficacy study; atovaquone is only a reference drug with IC50 values, no PK disposition parameters. |
| popPK | Hussein_1996 | irrelevant | 0 | 0 | The population PK model and all numeric parameters (CLo, V/F) are for proguanil; atovaquone is only a co-administered drug, not the subject of modeling. |
| popPK | Lütgendorf_2006 | irrelevant | 0 | 0 | In-vitro pharmacodynamic interaction study with no PK parameters for atovaquone. |
| popPK | McGready_2006 | irrelevant | 2 | 2 | The PK parameters reported are for dihydroartemisinin (metabolite of artesunate), not atovaquone, which is only co-administered; no atovaquone numeric values are given. |
| popPK | Niu_2024 | irrelevant | 0 | 0 | This is a natural-product/malaria transmission study; atovaquone is only mentioned as a comparator for EC50, with no PK parameters for atovaquone. |
| popPK | Smith_2023 | irrelevant | 0 | 0 | This is an in vitro drug-efficacy assay for Toxoplasma bradyzoites; atovaquone is only a test compound (EC50 2.7 μM), with no PK disposition parameters. |
| popPK | Stevens_2019 | irrelevant | 1 | 1 | This is a preclinical mechanistic/efficacy study in AML models; no PK disposition parameters (CL, V, half-life) for atovaquone are reported, only cited plasma concentration ranges. |
| popPK | Thapar_2003 | irrelevant | 0 | 0 | In-vitro pharmacodynamic interaction study with no PK disposition parameters for atovaquone. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | In-vitro antiviral drug screening reporting only EC50 values for atovaquone, with no PK disposition parameters. |
| popPK | Zhou_2026 | irrelevant | 1 | 0 | Efficacy/mechanism study in fish; no PK disposition parameters for atovaquone are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:17 UTC</sub>
