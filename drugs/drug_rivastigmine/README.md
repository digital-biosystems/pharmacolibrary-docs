<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;rivastigmine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rivastigmine_Gobburu2001_reference&quot;,&quot;label&quot;:&quot;Gobburu_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rivastigmine/Rivastigmine_Gobburu2001_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# rivastigmine

- **generic name:** rivastigmine
- **ATC codes:** `N06DA03`
- **DrugBank:** [DB00989](https://go.drugbank.com/drugs/DB00989) · **PubChem:** [CID 77991](https://pubchem.ncbi.nlm.nih.gov/compound/77991)
- **molar mass:** 250.3367 g/mol (C14H22N2O2) — DrugBank
- **groups:** approved, investigational

## About

Rivastigmine is an anticholinesterase medicine used to treat dementia, including Alzheimer's disease and Parkinson's disease dementia. It is approved and widely used, with several products authorised in the European Union for these conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411887](https://www.wikidata.org/wiki/Q411887) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rivastigmine | parent | 250.337 | C14H22N2O2 | DrugBank | [77991](https://pubchem.ncbi.nlm.nih.gov/compound/77991) | Gobburu_2001 |
| ZNS 114-666 (NAP 226-90) | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [Gobburu_2001_reference](drugs/drug_rivastigmine/Rivastigmine_Gobburu2001_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Gobburu JV et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of clinical pharmac… (2001) | [10.1177/00912700122012689](https://doi.org/10.1177/00912700122012689) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Manalo_2017_AChE_inhibition](drugs/drug_rivastigmine/pd_Manalo_2017_AChE_inhibition.md) | Acetylcholinesterase inhibition (positive control Rivastigmine) ← Rivastigmine · direct Emax (saturable) effect | — | Manalo RV et al., Coconut (Cocos nucifera) Ethanolic Leaf…, Biomedicines (2017) | [10.3390/biomedicines5020017](https://doi.org/10.3390/biomedicines5020017) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ndongo_2021_AChE_inhibition](drugs/drug_rivastigmine/pd_Ndongo_2021_AChE_inhibition.md) | acetylcholinesterase inhibition ← rivastigmine · inhibition effect | — | Ndongo TM et al., Microsequential injection analysis/lab-…, Archiv der Pharmazie (2021) | [10.1002/ardp.202100150](https://doi.org/10.1002/ardp.202100150) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Gobburu_2001_AChE_inhibition](drugs/drug_rivastigmine/pd_Gobburu_2001_AChE_inhibition.md) | acetylcholinesterase activity inhibition ← ZNS 114-666 (NAP 226-90, rivastigmine metabolite) · direct Emax (saturable) effect | — | Gobburu JV et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of clinical pharmac… (2001) | [10.1177/00912700122012689](https://doi.org/10.1177/00912700122012689) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:11 | 6:02 | 0/1/0 | 2/1/0 | 0/0/0 | 323,080/26,412 | ollama / glm-5.3-flash | 7 | 0/7 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 21 matched, 17 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gobburu_2001.pdf` | Gobburu JV et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of clinical pharmac… (2001) | popPK | 10 | [10.1177/00912700122012689](https://doi.org/10.1177/00912700122012689) | [11583476](https://pubmed.ncbi.nlm.nih.gov/11583476) | Population PK (NONMEM) of rivastigmine with numeric CL, V, bioavailability, and metabolite parameters reported directly in the abstract. |
| `Mita_2016.pdf` | Mita S et al., Pharmacokinetic Modeling to Simulate th…, Journal of pharmaceutical s… (2016) | popPK | 8 | [10.1016/j.xphs.2016.04.011](https://doi.org/10.1016/j.xphs.2016.04.011) | [27212635](https://pubmed.ncbi.nlm.nih.gov/27212635) | A rivastigmine dermal PK model is described, but no numeric parameter values (CL, V, ka) appear in the evidence, likely residing in tables/figures not provided. |
| `Liu_2021.pdf` | Liu X et al., Relating transdermal delivery plasma ph…, Journal of controlled relea… (2021) | popPK | 7 | [10.1016/j.jconrel.2021.04.010](https://doi.org/10.1016/j.jconrel.2021.04.010) | [33857564](https://pubmed.ncbi.nlm.nih.gov/33857564) | Rivastigmine transdermal plasma PK is modeled with diffusion/compartment-in-series models, but no numeric parameter values appear in the evidence (likely in figures/tables not provided). |
| `Mercier_2007.pdf` | Mercier F et al., Rivastigmine exposure provided by a tra…, Current medical research an… (2007) | popPK | 7 | [10.1185/030079908X253438](https://doi.org/10.1185/030079908X253438) | [18001519](https://pubmed.ncbi.nlm.nih.gov/18001519) | Population/compartmental PK of rivastigmine in AD patients, but numeric CL/V/ka values are not shown in the evidence (likely in tables/figures not provided). |

<sub>queue written 2026-10-07T03:06:02.246067+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Atri_2015 | irrelevant | 0 | 0 | This is a clinical efficacy (AUC of clinical outcome scores) study of memantine-donepezil in Alzheimer's disease; no PK parameters for rivastigmine are reported. |
| popPK | Bhuiyan_2026 | irrelevant | 0 | 0 | Rivastigmine is only used as a comparator/standard in AChE inhibition and docking; no PK parameters for rivastigmine are reported. |
| popPK | Bon_2024 | irrelevant | 0 | 0 | Medicinal chemistry paper synthesizing rivastigmine–indole hybrids with in vitro enzyme inhibition assays; no PK parameters for rivastigmine are reported. |
| popPK | Camargo-Ayala_2024 | irrelevant | 0 | 0 | In-vitro medicinal chemistry study of novel cholinesterase inhibitors; rivastigmine is only a comparator, with no PK parameters. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | This is a registry-based effectiveness study of cognitive trajectories, not a PK study; no disposition parameters for rivastigmine are reported. |
| popPK | Farlow_2005 | irrelevant | 0 | 0 | This is an efficacy meta-analysis of rivastigmine in Alzheimer's disease with no pharmacokinetic parameters or disposition values reported. |
| popPK | Kato_1999 | irrelevant | 0 | 0 | Rivastigmine is only a comparator with no PK parameters reported; the study is about TAK-147's neurotrophic effects. |
| popPK | Lefèvre_2016 | relevant | 4 | 3 | Population PK analysis of rivastigmine in Alzheimer's patients, but reports only steady-state concentrations (not CL/V/ka or model parameters); concentration values are present in tables, though the PK model parameters appear only in referenced prior analyses. |
| popPK | Liu_2021 | relevant | 7 | 3 | Rivastigmine transdermal plasma PK is modeled with diffusion/compartment-in-series models, but no numeric parameter values appear in the evidence (likely in figures/tables not provided). |
| popPK | Mamikonyan_2015 | irrelevant | 0 | 0 | This is a clinical efficacy trial of rivastigmine in PD-MCI with no pharmacokinetic parameters or model reported. |
| popPK | Manalo_2017 | irrelevant | 0 | 0 | Rivastigmine is only an in-vitro AChE-inhibition comparator (IC50 24.52 µg/mL); no PK disposition parameters for rivastigmine are reported. |
| popPK | Mercier_2007 | relevant | 7 | 3 | Population/compartmental PK of rivastigmine in AD patients, but numeric CL/V/ka values are not shown in the evidence (likely in tables/figures not provided). |
| popPK | Mita_2016 | relevant | 8 | 3 | A rivastigmine dermal PK model is described, but no numeric parameter values (CL, V, ka) appear in the evidence, likely residing in tables/figures not provided. |
| popPK | Ndongo_2021 | irrelevant | 0 | 0 | In-vitro acetylcholinesterase inhibition assay; rivastigmine is only a comparator with EC50 values, no PK parameters. |
| popPK | Wattmo_2011 | irrelevant | 0 | 0 | Clinical outcome study of ChEI efficacy in AD; no PK parameters (CL, V, ka, half-life) for rivastigmine are reported, only mean doses. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 03:06 UTC</sub>
