<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;acalabrutinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Acalabrutinib_Edlund2022_reference&quot;,&quot;label&quot;:&quot;Edlund_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Acalabrutinib_Hefnawy2022_reference&quot;,&quot;label&quot;:&quot;Hefnawy_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acalabrutinib/Acalabrutinib_Hefnawy2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Acalabrutinib_Kemal2026_reference&quot;,&quot;label&quot;:&quot;Kemal_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acalabrutinib/Acalabrutinib_Kemal2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# acalabrutinib

- **generic name:** acalabrutinib
- **ATC codes:** `L01EL02`
- **DrugBank:** [DB11703](https://go.drugbank.com/drugs/DB11703) · **PubChem:** [CID 71226662](https://pubchem.ncbi.nlm.nih.gov/compound/71226662)
- **molar mass:** 465.517 g/mol (C26H23N7O2) — DrugBank
- **groups:** approved, investigational

## About

Acalabrutinib is a Bruton's tyrosine kinase inhibitor used to treat mantle cell lymphoma and chronic lymphocytic leukemia. It is an approved medicine, also still under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q23668732](https://www.wikidata.org/wiki/Q23668732) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| acalabrutinib | parent | 465.517 | C26H23N7O2 | DrugBank | [71226662](https://pubchem.ncbi.nlm.nih.gov/compound/71226662) | Edlund_2022 |
| ACP-5862 | metabolite | 481.516 | C26H23N7O3 | PubChem | [135177281](https://pubchem.ncbi.nlm.nih.gov/compound/135177281) | Edlund_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:05 | 39:04 | 3/2/0 | 4/1/2 | 0/0/0 | 722,818/93,210 | openai / gpt-6-luna | 29 | 3/19 | 26/3 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Edlund_2022_reference](drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference.md) | ▶ model + simulator | parent 2-cmt + 1 metabolite (2-cmt) | 11 | Edlund H et al., Improved characterization of the pharma…, British journal of clinical… (2022) | [10.1111/bcp.14988](https://doi.org/10.1111/bcp.14988) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Hefnawy_2022_reference](drugs/drug_acalabrutinib/Acalabrutinib_Hefnawy2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Hefnawy MM et al., A Rapid and Sensitive Liquid Chromatogr…, Molecules (Basel, Switzerla… (2022) | [10.3390/molecules28010079](https://doi.org/10.3390/molecules28010079) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kemal_2026_reference](drugs/drug_acalabrutinib/Acalabrutinib_Kemal2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Kemal CC et al., Population Pharmacokinetic Modeling and…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70257](https://doi.org/10.1002/psp4.70257) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Edlund_2019_reference](drugs/drug_acalabrutinib/Acalabrutinib_Edlund2019_reference.md) | — | parent + metabolite (no model) | 0 | Edlund H et al., Population Pharmacokinetics of the BTK…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0725-7](https://doi.org/10.1007/s40262-018-0725-7) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yao_2025_reference](drugs/drug_acalabrutinib/Acalabrutinib_Yao2025_reference.md) | — | parent + metabolite (no model) | 0 | Yao T et al., Assessment of ethnic differences in pha…, British journal of clinical… (2025) | [10.1002/bcp.70018](https://doi.org/10.1002/bcp.70018) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2018_collagen_induced_platelet_aggregation](drugs/drug_acalabrutinib/pd_Chen_2018_collagen_induced_platelet_aggregation.md) | collagen-induced platelet aggregation ← acalabrutinib · inhibition effect | — | Chen J et al., The effect of Bruton's tyrosine kinase…, European journal of haemato… (2018) | [10.1111/ejh.13148](https://doi.org/10.1111/ejh.13148) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Denzinger_2019_collagen_induced_platelet_aggregation](drugs/drug_acalabrutinib/pd_Denzinger_2019_collagen_induced_platelet_aggregation.md) | collagen-induced platelet aggregation ← acalabrutinib · inhibition effect | — | Denzinger V et al., Optimizing Platelet GPVI Inhibition ver…, Thrombosis and haemostasis (2019) | [10.1055/s-0039-1677744](https://doi.org/10.1055/s-0039-1677744) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Goldmann_2019_Fc_RIIA_cross_linking_induced_platelet_aggregation](drugs/drug_acalabrutinib/pd_Goldmann_2019_Fc_RIIA_cross_linking_induced_platelet_aggrega.md) | FcγRIIA cross-linking-induced platelet aggregation ← acalabrutinib · inhibition effect | — | Goldmann L et al., Oral Bruton tyrosine kinase inhibitors…, Blood advances (2019) | [10.1182/bloodadvances.2019000617](https://doi.org/10.1182/bloodadvances.2019000617) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Xu_2022_BO](drugs/drug_acalabrutinib/pd_Xu_2022_BO.md) | BTK occupancy ← acalabrutinib and ACP-5862 · inhibition effect | — | Xu L et al., Physiologically based pharmacokinetic c…, European journal of clinica… (2022) | [10.1007/s00228-022-03338-7](https://doi.org/10.1007/s00228-022-03338-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Edlund_2022_2_PFS](drugs/drug_acalabrutinib/pd_Edlund_2022_2_PFS.md) | progression‐free survival ← total active (acalabrutinib + ACP‐5862) · time-to-event model | — | Edlund H et al., Exposure-response analysis of acalabrut…, British journal of clinical… (2022) | [10.1111/bcp.15087](https://doi.org/10.1111/bcp.15087) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Edlund_2022_2_infection](drugs/drug_acalabrutinib/pd_Edlund_2022_2_infection.md) | grade ≥2 infection ← acalabrutinib · categorical (graded) response model | — | Edlund H et al., Exposure-response analysis of acalabrut…, British journal of clinical… (2022) | [10.1111/bcp.15087](https://doi.org/10.1111/bcp.15087) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yao_2025_AEs](drugs/drug_acalabrutinib/pd_Yao_2025_AEs.md) | incidence of any grade ≥2 adverse events (AEs) ← acalabrutinib · categorical (graded) response model | — | Yao T et al., Assessment of ethnic differences in pha…, British journal of clinical… (2025) | [10.1002/bcp.70018](https://doi.org/10.1002/bcp.70018) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yao_2025_AEs_2](drugs/drug_acalabrutinib/pd_Yao_2025_AEs_2.md) | incidence of any grade ≥3 AEs ← acalabrutinib · categorical (graded) response model | — | Yao T et al., Assessment of ethnic differences in pha…, British journal of clinical… (2025) | [10.1002/bcp.70018](https://doi.org/10.1002/bcp.70018) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Alsadhan_2020_BTK](drugs/drug_acalabrutinib/pd_Alsadhan_2020_BTK.md) | free BTK biomarker turnover ← endogenous kinetics | — | Alsadhan A et al., Pharmacodynamic Analysis of BTK Inhibit…, Clinical cancer research :… (2020) | [10.1158/1078-0432.CCR-19-3505](https://doi.org/10.1158/1078-0432.CCR-19-3505) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=acalabrutinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: BTK (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 73 matched, 70 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 3  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alotaiq_2024 | irrelevant | 0 | 0 | This is a systematic review and provides no quantitative acalabrutinib disposition parameters. |
| popPK | Attwa_2023 | irrelevant | 2 | 10 | This is an in-vitro human liver microsome study, with numeric half-life and intrinsic clearance values reported. |
| popPK | Attwa_2024 | irrelevant | 0 | 0 | The numeric in vitro values are for CEP-37440, not acalabrutinib. |
| popPK | Cadot_2024 | irrelevant | 0 | 0 | This human study models ibrutinib-related cell dynamics and reports no acalabrutinib disposition parameters. |
| popPK | Edlund_2022_2 | irrelevant | 2 | 3 | This human exposure–response analysis uses population-PK estimates but reports no numeric disposition-model parameters; only background half-lives and Tmax are given. |
| popPK | He_2025 | irrelevant | 0 | 0 | This drug-repositioning study reports no quantitative pharmacokinetic parameters for acalabrutinib. |
| popPK | Hefnawy_2022 | irrelevant | 0 | 0 | The rat pharmacokinetic parameters are for encorafenib and binimetinib, not acalabrutinib. |
| popPK | Hoang_2025 | irrelevant | 0 | 0 | This is a human outcomes study of ibrutinib; acalabrutinib is only mentioned, with no acalabrutinib PK parameters reported. |
| popPK | Isoherranen_2025 | irrelevant | 0 | 0 | This is a minireview and reports no quantitative acalabrutinib disposition parameters. |
| popPK | Kemal_2026 | irrelevant | 0 | 0 | This is a human population-PK study of nemtabrutinib; acalabrutinib is mentioned only as background, with no acalabrutinib parameter values. |
| popPK | Kramer_2022 | irrelevant | 0 | 0 | This review reports clinical outcomes for JAK inhibitors, not acalabrutinib pharmacokinetic parameters. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | Acalabrutinib is mentioned only as background; the paper reports no acalabrutinib pharmacokinetic parameters. |
| popPK | McKeown_2024 | irrelevant | 0 | 0 | Acalabrutinib is only mentioned as a treatment example; the paper reports no acalabrutinib pharmacokinetic parameters. |
| popPK | Meng_2022 | irrelevant | 0 | 0 | The reported PK model and numeric parameters are for tirabrutinib, not acalabrutinib. |
| PGx | Mingalimov_2026 | not_relevant | 0 | 0 | The paper assigns acalabrutinib by tumor subtype but reports no gene-associated effect on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Pepin_2019 | not_relevant | 0 | 0 | The paper models effects of formulation, stomach pH, proton pump inhibitors, and acidic juices, but does not report a gene variant, genotype, or phenotype effect on acalabrutinib PK or PD. |
| PGx | Pilla_2021_2 | not_relevant | 0 | 0 | The paper models CYP3A5 metabolizer effects on vincristine, not a genetic effect on acalabrutinib PK or PD. |
| PGx | Podoll_2023 | not_relevant | 0 | 0 | The paper characterizes CYP3A4-mediated metabolism in vitro but does not report a gene variant, genotype, or phenotype effect on acalabrutinib PK or PD. |
| popPK | Rogers_2025 | irrelevant | 0 | 0 | This clinical study evaluates ianalumab with ibrutinib and reports no acalabrutinib pharmacokinetic parameters. |
| popPK | Serra_2022 | irrelevant | 0 | 0 | Acalabrutinib is only mentioned as a cited COVID-19 treatment, with no acalabrutinib PK parameters reported. |
| PGx | Sinha_2024 | not_relevant | 0 | 0 | The paper reports formulation-related changes in acalabrutinib bioavailability, not effects of a gene variant, genotype, or phenotype on a PK or PD parameter. |
| PGx | Sinha_2025 | not_relevant | 0 | 0 | The paper evaluates a nanoparticle formulation’s effect on acalabrutinib bioavailability, not a genetic variant, genotype, or phenotype effect on a PK/PD parameter. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | Reports in vitro UGT inhibition and potential drug-drug interactions, not a genetic or phenotypic effect on acalabrutinib PK/PD. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | Reports finerenone-mediated drug–drug interaction effects on acalabrutinib pharmacokinetics, but no gene variant, genotype, or phenotype effect. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | This review reports no quantitative acalabrutinib disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:38 UTC</sub>
