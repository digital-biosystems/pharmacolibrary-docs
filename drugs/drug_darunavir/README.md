<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;darunavir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Darunavir_Courlet2021_reference&quot;,&quot;label&quot;:&quot;Courlet_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_darunavir/Darunavir_Courlet2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Darunavir_Stillemans2021_reference&quot;,&quot;label&quot;:&quot;Stillemans_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_darunavir/Darunavir_Stillemans2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# darunavir

- **generic name:** darunavir
- **ATC codes:** `J05AE10`, `J05AR14`, `J05AR22`, `J05AR26`
- **DrugBank:** [DB01264](https://go.drugbank.com/drugs/DB01264) · **PubChem:** [CID 213039](https://pubchem.ncbi.nlm.nih.gov/compound/213039)
- **molar mass:** 547.664 g/mol (C27H37N3O7S) — DrugBank
- **groups:** approved, investigational

## About

Darunavir is an antiviral protease inhibitor used to treat HIV infection. It is authorised in the European Union and is included on the WHO list of essential medicines, so it is widely used in HIV treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3765251](https://www.wikidata.org/wiki/Q3765251) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| darunavir | parent | 547.664 | C27H37N3O7S | DrugBank | [213039](https://pubchem.ncbi.nlm.nih.gov/compound/213039) | Abdalla_2024, Stillemans_2021, Tsirizani_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:47 | 5:07 | 2/2/0 | 1/0/0 | 0/0/0 | 322,499/18,253 | ollama / glm-5.3-flash | 8 | 1/7 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span> | [Courlet_2021_reference](drugs/drug_darunavir/Darunavir_Courlet2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Courlet P et al., Population pharmacokinetic modelling to…, European journal of clinica… (2021) | [10.1007/s00228-020-03060-2](https://doi.org/10.1007/s00228-020-03060-2) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Stillemans_2021_reference](drugs/drug_darunavir/Darunavir_Stillemans2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+1 cov.) | Stillemans G et al., Exploration of Reduced Doses and Short-…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00920-z](https://doi.org/10.1007/s40262-020-00920-z) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.524). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Abdalla_2024_reference](drugs/drug_darunavir/Darunavir_Abdalla2024_reference.md) | — | parent + metabolite (no model) | 6 (+1 cov.) | Abdalla S et al., Simultaneous pharmacokinetic modeling o…, Antimicrobial agents and ch… (2024) | [10.1128/aac.01004-23](https://doi.org/10.1128/aac.01004-23) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Tsirizani_2024_reference](drugs/drug_darunavir/Darunavir_Tsirizani2024_reference.md) | — | 1-compartment (no model) | 0 | Tsirizani L et al., Pharmacokinetics of once-daily darunavi…, The Journal of antimicrobia… (2024) | [10.1093/jac/dkae319](https://doi.org/10.1093/jac/dkae319) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [De_2020_CPE](drugs/drug_darunavir/pd_De_2020_CPE.md) | inhibition of SARS-CoV-2-induced cytopathogenic effect (visual CPE read-out) ← darunavir · direct sigmoid Emax (Hill) effect | — | De Meyer S et al., Lack of antiviral activity of darunavir…, International journal of in… (2020) | [10.1016/j.ijid.2020.05.085](https://doi.org/10.1016/j.ijid.2020.05.085) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [De_2020_MTT](drugs/drug_darunavir/pd_De_2020_MTT.md) | inhibition of SARS-CoV-2-induced cytopathogenic effect (MTT assay) ← darunavir · direct sigmoid Emax (Hill) effect | — | De Meyer S et al., Lack of antiviral activity of darunavir…, International journal of in… (2020) | [10.1016/j.ijid.2020.05.085](https://doi.org/10.1016/j.ijid.2020.05.085) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=darunavir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 92 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 2  ·  needs_review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Moltó_2018.pdf` | Moltó J et al., Pharmacokinetics of darunavir/cobicista…, The Journal of antimicrobia… (2018) | popPK | 6 | [10.1093/jac/dkx459](https://doi.org/10.1093/jac/dkx459) | [29237008](https://pubmed.ncbi.nlm.nih.gov/29237008) | Human PK study of darunavir with NCA parameters (AUC, Cmax, C24) reported as percent changes in the abstract, but full numeric values likely in tables not provided. |
| `Brooks_2023.pdf` | Brooks KM et al., Pharmacokinetics, Safety, and Tolerabil…, Journal of acquired immune… (2023) | popPK | 5 | [10.1097/QAI.0000000000003301](https://doi.org/10.1097/QAI.0000000000003301) | [37955446](https://pubmed.ncbi.nlm.nih.gov/37955446) | Human intensive PK study of darunavir with NCA parameters, but only percentage changes (AUC, Cmax, C24h) are given; no CL/V/t½ values appear in the evidence. |

<sub>queue written 2026-10-07T15:42:43.069702+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdalla_2023 | irrelevant | 1 | 0 | The population PK model and parameters are for dolutegravir; darunavir is only a co-administered comparator drug with no darunavir PK parameters reported. |
| popPK | Barceló_2016 | irrelevant | 0 | 0 | This is a population PK study of elvitegravir and cobicistat; darunavir appears only as a co-administered drug affecting cobicistat clearance, with no darunavir PK parameters reported. |
| popPK | Boffito_2008 | irrelevant | 3 | 2 | Only a half-life (15 h) and Cmin vs EC50 are mentioned; no CL, V, or population-PK parameter values are reported. |
| popPK | Brooks_2023 | relevant | 5 | 3 | Human intensive PK study of darunavir with NCA parameters, but only percentage changes (AUC, Cmax, C24h) are given; no CL/V/t½ values appear in the evidence. |
| popPK | Courlet_2021 | irrelevant | 0 | 0 | This is a population PK study of amlodipine; darunavir appears only as a co-administered CYP3A4 inhibitor, with no PK parameters for darunavir itself. |
| popPK | Daskapan_2019 | relevant | 9 | 3 | A population PK model (CL, V, Ka, 1-compartment) for darunavir in HIV outpatients was developed, but the numeric parameter values are in table 2 and supplements not included in the evidence. |
| popPK | De_2020 | irrelevant | 0 | 0 | In vitro antiviral activity study of darunavir against SARS-CoV-2; no PK disposition parameters (CL, V, half-life, or PK model) reported. |
| popPK | García_2008 | irrelevant | 0 | 0 | This is a review of darunavir resistance mutations and virological response, with no pharmacokinetic parameters reported. |
| popPK | Hijazi_2020 | irrelevant | 2 | 1 | This is a transporter-expression/drug-exposure study in macaques; no PK disposition parameters (CL, V, half-life, or PK model) for darunavir are reported, only measured concentrations. |
| popPK | Li_2022 | irrelevant | 0 | 0 | This is a review of HIV reverse transcriptase inhibitors (TAF, RPV, DOR, etc.); darunavir is only mentioned as a protease inhibitor comparator, with no PK parameters for darunavir reported. |
| popPK | Ma_2022 | irrelevant | 0 | 0 | In-vitro antiviral screening study of darunavir derivatives against SARS-CoV-2 3CLpro; no PK parameters (CL, V, ka, half-life, population-PK model) for darunavir are reported. |
| popPK | Midde_2017 | irrelevant | 4 | 3 | In vitro microsomal/monocyte study with intrinsic clearance mentioned but no numeric PK parameter values present in the evidence. |
| popPK | Moltó_2018 | relevant | 6 | 3 | Human PK study of darunavir with NCA parameters (AUC, Cmax, C24) reported as percent changes in the abstract, but full numeric values likely in tables not provided. |
| popPK | Zhang_2024 | irrelevant | 3 | 2 | Darunavir is only a co-administered perpetrator; the PK model and reported parameters concern GSK3640254, with no darunavir disposition values given. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:42 UTC</sub>
