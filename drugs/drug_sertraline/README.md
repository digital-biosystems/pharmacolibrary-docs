<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;sertraline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sertraline_Poweleit2023_reference&quot;,&quot;label&quot;:&quot;Poweleit_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sertraline/Sertraline_Poweleit2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sertraline_Xia2025_reference&quot;,&quot;label&quot;:&quot;Xia_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sertraline/Sertraline_Xia2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sertraline

- **generic name:** sertraline
- **ATC codes:** `N06AB06`
- **DrugBank:** [DB01104](https://go.drugbank.com/drugs/DB01104) · **PubChem:** [CID 68617](https://pubchem.ncbi.nlm.nih.gov/compound/68617)
- **molar mass:** 306.23 g/mol (C17H17Cl2N) — DrugBank
- **groups:** approved, investigational

## About

Sertraline is an antidepressant used for depression and several anxiety-related conditions, including obsessive-compulsive disorder, panic disorder, and post-traumatic stress disorder. It is an approved, widely used selective serotonin reuptake inhibitor.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407617](https://www.wikidata.org/wiki/Q407617) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sertraline | parent | 306.23 | C17H17Cl2N | DrugBank | [68617](https://pubchem.ncbi.nlm.nih.gov/compound/68617) | Cooper_2015, Monfort_2024, Poweleit_2023, Xia_2025, Zhang_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:47 | 3:40 | 2/1/3 | 3/0/1 | 0/0/0 | 203,148/22,583 | ollama / glm-5.3-flash | 15 | 3/4 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125), gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Poweleit_2023_reference](drugs/drug_sertraline/Sertraline_Poweleit2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Poweleit EA et al., Escitalopram and Sertraline Population…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01294-8](https://doi.org/10.1007/s40262-023-01294-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714), gpt-oss:120b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Xia_2025_reference](drugs/drug_sertraline/Sertraline_Xia2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Xia H et al., Investigating Remedial Strategies for M…, Drug design, development an… (2025) | [10.2147/DDDT.S504521](https://doi.org/10.2147/DDDT.S504521) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182), gpt-oss:120b (partly confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Cooper_2015_reference](drugs/drug_sertraline/Sertraline_Cooper2015_reference.md) | — | 1-compartment (no model) | 3 | Cooper JM et al., The pharmacokinetics of sertraline in o…, British journal of clinical… (2015) | [10.1111/bcp.12500](https://doi.org/10.1111/bcp.12500) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.706), gpt-oss:120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Monfort_2024_reference](drugs/drug_sertraline/Sertraline_Monfort2024_reference.md) | — | 1-compartment (no model) | 4 (+1 cov.) | Monfort A et al., A population pharmacokinetic model for…, British journal of clinical… (2024) | [10.1111/bcp.16177](https://doi.org/10.1111/bcp.16177) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375), gpt-oss:120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2024_reference](drugs/drug_sertraline/Sertraline_Zhang2024_reference.md) | — | 1-compartment (no model) | 4 | Zhang Z et al., Population pharmacokinetic approach to…, Heliyon (2024) | [10.1016/j.heliyon.2024.e25231](https://doi.org/10.1016/j.heliyon.2024.e25231) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (partly confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Castillo_2024_reference](drugs/drug_sertraline/Sertraline_Castillo2024_reference.md) | — | 1-compartment (no model) | 0 | Castillo CEC et al., Population Pharmacokinetics of Sertrali…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2457](https://doi.org/10.1002/jcph.2457) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Lee_2016_Kv1_5_inhibition](drugs/drug_sertraline/pd_Lee_2016_Kv1_5_inhibition.md) | Kv1.5 whole-cell current inhibition ← sertraline · direct sigmoid Emax (Hill) effect | — | Lee HM et al., Blockade of Kv1.5 channels by the antid…, The Korean journal of physi… (2016) | [10.4196/kjpp.2016.20.2.193](https://doi.org/10.4196/kjpp.2016.20.2.193) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Minguez_2014_EC50](drugs/drug_sertraline/pd_Minguez_2014_EC50.md) | Acute toxicity (immobilization/mortality in Daphnia magna) ← sertraline · model not identified | — | Minguez L et al., Acute toxicity of 8 antidepressants: wh…, Chemosphere (2014) | [10.1016/j.chemosphere.2014.01.057](https://doi.org/10.1016/j.chemosphere.2014.01.057) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span> | [Romanelli_2019_CC50](drugs/drug_sertraline/pd_Romanelli_2019_CC50.md) | NCTC cell viability (SERT cytotoxicity) ← sertraline · direct sigmoid Emax (Hill) effect | — | Romanelli MM et al., Sertraline Delivered in Phosphatidylser…, Frontiers in cellular and i… (2019) | [10.3389/fcimb.2019.00353](https://doi.org/10.3389/fcimb.2019.00353) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span> | [Romanelli_2019_CC50_LP_SERT](drugs/drug_sertraline/pd_Romanelli_2019_CC50_LP_SERT.md) | NCTC cell viability (LP-SERT cytotoxicity) ← liposomal sertraline (LP-SERT) · direct sigmoid Emax (Hill) effect | — | Romanelli MM et al., Sertraline Delivered in Phosphatidylser…, Frontiers in cellular and i… (2019) | [10.3389/fcimb.2019.00353](https://doi.org/10.3389/fcimb.2019.00353) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span> | [Romanelli_2019_EC50_amastigotes](drugs/drug_sertraline/pd_Romanelli_2019_EC50_amastigotes.md) | infected macrophages (intracellular amastigotes, SERT) ← sertraline · direct sigmoid Emax (Hill) effect | — | Romanelli MM et al., Sertraline Delivered in Phosphatidylser…, Frontiers in cellular and i… (2019) | [10.3389/fcimb.2019.00353](https://doi.org/10.3389/fcimb.2019.00353) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span> | [Romanelli_2019_EC50_amastigotes_LP_SERT](drugs/drug_sertraline/pd_Romanelli_2019_EC50_amastigotes_LP_SERT.md) | infected macrophages (intracellular amastigotes, LP-SERT) ← liposomal sertraline (LP-SERT) · direct sigmoid Emax (Hill) effect | — | Romanelli MM et al., Sertraline Delivered in Phosphatidylser…, Frontiers in cellular and i… (2019) | [10.3389/fcimb.2019.00353](https://doi.org/10.3389/fcimb.2019.00353) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span> | [Romanelli_2019_EC50_promastigotes](drugs/drug_sertraline/pd_Romanelli_2019_EC50_promastigotes.md) | viability of L. (L.) infantum promastigotes (SERT) ← sertraline · direct sigmoid Emax (Hill) effect | — | Romanelli MM et al., Sertraline Delivered in Phosphatidylser…, Frontiers in cellular and i… (2019) | [10.3389/fcimb.2019.00353](https://doi.org/10.3389/fcimb.2019.00353) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span> | [Kreilgaard_2008_5_HTP_score](drugs/drug_sertraline/pd_Kreilgaard_2008_5_HTP_score.md) | 5-HTP-potentiated behavioral syndrome score ← sertraline · direct sigmoid Emax (Hill) effect | model (no simulator) | Kreilgaard M et al., Prediction of clinical response based o…, British journal of pharmaco… (2008) | [10.1038/bjp.2008.243](https://doi.org/10.1038/bjp.2008.243) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span> | [Kreilgaard_2008_SERT_occ](drugs/drug_sertraline/pd_Kreilgaard_2008_SERT_occ.md) | SERT occupancy ← sertraline · direct sigmoid Emax (Hill) effect | model (no simulator) | Kreilgaard M et al., Prediction of clinical response based o…, British journal of pharmaco… (2008) | [10.1038/bjp.2008.243](https://doi.org/10.1038/bjp.2008.243) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sertraline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate, `MAOA` substrate, `MAOB` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inhibitor/substrate, `CYP2C19` inhibitor/substrate, `CYP2C9` inhibitor/substrate, `CYP2D6` inhibitor/substrate, `CYP2E1` substrate, `CYP3A4` inhibitor/substrate, `MAOA` substrate | DrugBank actor |
| metabolism | platelet | `MAOB` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `MAOA` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` binder/downregulator/inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` binder/downregulator/inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CYP2B (inducer), PGRMC1 (binder), PGRMC1 (inhibitor), SLC29A4 (inhibitor), SLC6A2 (downregulator), SLC6A2 (inhibitor), SLC6A3 (binder), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 74 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 6  ·  extracted 2  ·  needs_review 3  ·  rejected 1  ·  stale 6
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alhadab_2020.pdf` | Alhadab AA et al., Population Pharmacokinetics of Sertrali…, The AAPS journal (2020) | popPK | 10 | [10.1208/s12248-020-00455-y](https://doi.org/10.1208/s12248-020-00455-y) | [32430638](https://pubmed.ncbi.nlm.nih.gov/32430638) | A sertraline population PK model (2-compartment, NONMEM) in healthy humans is the paper's subject, but the abstract gives no numeric CL/V/ka values—those likely live in tables/figures not provided. |
| `Castillo_2024.pdf` | Castillo CEC et al., Population Pharmacokinetics of Sertrali…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2457](https://doi.org/10.1002/jcph.2457) | [38720595](https://pubmed.ncbi.nlm.nih.gov/38720595) | Population PK model of sertraline in humans with numeric CL (66 L/h), ka (0.855 1/h), and V (20.2 L/kg) reported directly in the abstract. |
| `Poweleit_2023.pdf` | Poweleit EA et al., Escitalopram and Sertraline Population…, Clinical pharmacokinetics (2023) | popPK | 10 | [10.1007/s40262-023-01294-8](https://doi.org/10.1007/s40262-023-01294-8) | [37755681](https://pubmed.ncbi.nlm.nih.gov/37755681) | Population PK model of sertraline in pediatric patients with numeric CL/F (124 L/h/70 kg) and V/F (4320 L/70 kg) reported directly in the abstract. |
| `Stoiljkovic_2023.pdf` | Stoiljkovic M et al., Population Pharmacokinetic Modeling to…, Pharmacology (2023) | popPK | 10 | [10.1159/000530084](https://doi.org/10.1159/000530084) | [37257430](https://pubmed.ncbi.nlm.nih.gov/37257430) | Population PK model of sertraline in humans, but no numeric parameter values (CL, V, estimates) appear in the provided evidence. |
| `Jang_2024.pdf` | Jang JH et al., Population pharmacokinetic modeling stu…, Computers in biology and me… (2024) | popPK | 9 | [10.1016/j.compbiomed.2024.109319](https://doi.org/10.1016/j.compbiomed.2024.109319) | [39461103](https://pubmed.ncbi.nlm.nih.gov/39461103) | Population PK model of sertraline in humans with covariates, but specific parameter values (CL, V, ka) are not shown in the evidence, likely in tables/figures not provided. |

<sub>queue written 2026-10-06T23:44:25.517604+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alhadab_2020 | relevant | 10 | 4 | A sertraline population PK model (2-compartment, NONMEM) in healthy humans is the paper's subject, but the abstract gives no numeric CL/V/ka values—those likely live in tables/figures not provided. |
| PD | Alhadab_2020 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) and dose proportionality of exposure metrics (Cmax, AUC), with no analysis of pharmacodynamic (PD) effects or exposure-response relationships. |
| popPK | Baumann_1996 | irrelevant | 2 | 0 | A qualitative review of SSRI pharmacokinetics/pharmacodynamics with no numeric disposition parameters for sertraline reported in the evidence. |
| PD | Baumann_1996 | not_relevant | 1 | 0 | The text is a review of PK properties and drug interactions, explicitly stating that no clear plasma concentration-clinical effectiveness relationship has been shown, and provides no numeric PD parameters. |
| popPK | Jang_2024 | relevant | 9 | 4 | Population PK model of sertraline in humans with covariates, but specific parameter values (CL, V, ka) are not shown in the evidence, likely in tables/figures not provided. |
| popPK | Khanam_2006 | irrelevant | 0 | 0 | Pharmacodynamic study of sertraline's hypoglycemic mechanism in rats; no PK disposition parameters reported. |
| popPK | Kreilgaard_2008 | relevant | 7 | 4 | Sertraline PK in mice is reported (non-compartmental plus a two-compartment model for the SERT-occupancy profile), but the numeric parameter values for sertraline are in Table 1/2 and Figure 1, which are not fully included in the evidence. |
| popPK | Lee_2016 | irrelevant | 0 | 0 | In-vitro electrophysiology study of sertraline blocking Kv1.5 channels in CHO cells; no PK disposition parameters (CL, V, ka, half-life, population-PK model) are reported. |
| popPK | Milosavljević_2019 | irrelevant | 0 | 0 | In-vitro tissue bath study of SSRIs on fallopian tube motility; no sertraline PK parameters reported. |
| PD | Milosavljević_2019 | not_relevant | 0 | 0 | The paper reports PD parameters for escitalopram and paroxetine, but does not report any data or parameters for sertraline. |
| popPK | Minguez_2014 | irrelevant | 0 | 0 | Ecotoxicity study reporting EC50 values, not pharmacokinetic disposition parameters for sertraline. |
| popPK | Minguez_2014_2 | irrelevant | 0 | 0 | Ecotoxicity study reporting EC50 toxicity values, not pharmacokinetic disposition parameters for sertraline. |
| popPK | Romanelli_2019 | irrelevant | 1 | 1 | This is an efficacy/drug-delivery study of liposomal sertraline against Leishmania in mice; no PK disposition parameters (CL, V, ka, half-life, or population-PK model) for sertraline are reported. |
| popPK | Stoiljkovic_2023 | relevant | 10 | 2 | Population PK model of sertraline in humans, but no numeric parameter values (CL, V, estimates) appear in the provided evidence. |
| popPK | Xie_2023 | irrelevant | 0 | 0 | Ecotoxicology/removal study in algae; no PK disposition parameters for sertraline. |
| popPK | Zang_2024 | irrelevant | 0 | 0 | This is a population PK model of olanzapine; sertraline appears only as a covariate affecting olanzapine clearance, with no sertraline PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:44 UTC</sub>
