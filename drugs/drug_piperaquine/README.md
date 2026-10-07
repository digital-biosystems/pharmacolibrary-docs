<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Piperaquine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Piperaquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Chotsiri2021_population_estimatec&quot;,&quot;label&quot;:&quot;Chotsiri_2021_population_estimatec&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Chotsiri2021_prior_estimateb&quot;,&quot;label&quot;:&quot;Chotsiri_2021_prior_estimateb&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Ding2024_nonmem_population_estimates_rse_a&quot;,&quot;label&quot;:&quot;Ding_2024_nonmem_population_estimates_rse_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Ding2024_nonmem_population_estimates_rse_a.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Zaloumis2012_reference&quot;,&quot;label&quot;:&quot;Zaloumis_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Zaloumis2012_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Piperaquine

- **generic name:** Piperaquine
- **ATC codes:** `P01BF05`, `P01BF07`, `P01BX02`
- **DrugBank:** [DB13941](https://go.drugbank.com/drugs/DB13941) · **PubChem:** not captured
- **molar mass:** 535.52 g/mol (C29H32Cl2N6) — DrugBank
- **groups:** approved, investigational

## About

Piperaquine is an antimalarial drug used to treat malaria, typically in fixed combination with an artemisinin derivative. It is approved and used mainly in malaria-endemic regions as part of artemisinin-based combination therapy, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7197338](https://www.wikidata.org/wiki/Q7197338) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| piperaquine | parent | 535.52 | C29H32Cl2N6 | DrugBank | — | Chotsiri_2017, Chotsiri_2021, Ding_2024, Hoglund_2017, Patel_2014, Wattanakul_2021, Zaloumis_2012 |
| amodiaquine | metabolite | 355.866 | C20H22ClN3O | PubChem | [2165](https://pubchem.ncbi.nlm.nih.gov/compound/2165) | Ding_2024 |
| desethylamodiaquine | metabolite | 327.812 | C18H18ClN3O | PubChem | [122068](https://pubchem.ncbi.nlm.nih.gov/compound/122068) | Ding_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:46 | 12:02 | 5/2/3 | 5/2/2 | 0/0/0 | 536,864/35,809 | ollama / glm-5.3-flash | 13 | 0/13 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chairat_2018_reference](drugs/drug_piperaquine/Piperaquine_Chairat2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Chairat K et al., Enantiospecific pharmacokinetics and dr…, The Journal of antimicrobia… (2018) | [10.1093/jac/dky297](https://doi.org/10.1093/jac/dky297) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chotsiri_2021_population_estimatec](drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec.md) | ▶ model + simulator | 2-compartment, oral | 8 | Chotsiri P et al., Piperaquine Pharmacokinetics during Int…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.01150-20](https://doi.org/10.1128/AAC.01150-20) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chotsiri_2021_prior_estimateb](drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb.md) | ▶ model + simulator | 1-compartment, oral | 5 | Chotsiri P et al., Piperaquine Pharmacokinetics during Int…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.01150-20](https://doi.org/10.1128/AAC.01150-20) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ding_2024_nonmem_population_estimates_rse_a](drugs/drug_piperaquine/Piperaquine_Ding2024_nonmem_population_estimates_rse_a.md) | ▶ model + simulator | 1-compartment, oral | 9 | Ding J et al., Population pharmacokinetics of amodiaqu…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zaloumis_2012_reference](drugs/drug_piperaquine/Piperaquine_Zaloumis2012_reference.md) | ▶ model + simulator | 3-compartment, oral | 6 | Zaloumis S et al., Assessing the utility of an anti-malari…, Malaria journal (2012) | [10.1186/1475-2875-11-303](https://doi.org/10.1186/1475-2875-11-303) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Hoglund_2017_reference](drugs/drug_piperaquine/Piperaquine_Hoglund2017_reference.md) | — | 1-compartment (no model) | 1 | Hoglund RM et al., Population Pharmacokinetic Properties o…, PLoS medicine (2017) | [10.1371/journal.pmed.1002212](https://doi.org/10.1371/journal.pmed.1002212) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Patel_2014_reference](drugs/drug_piperaquine/Piperaquine_Patel2014_reference.md) | — | 1-compartment (no model) | 1 | Patel K et al., Predicting the parasite killing effect…, The Journal of antimicrobia… (2014) | [10.1093/jac/dku120](https://doi.org/10.1093/jac/dku120) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Wattanakul_2021_reference](drugs/drug_piperaquine/Piperaquine_Wattanakul2021_reference.md) | — | 1-compartment (no model) | 1 | Wattanakul T et al., Semimechanistic Pharmacokinetic and Pha…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.01583-20](https://doi.org/10.1128/AAC.01583-20) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chotsiri_2017_reference](drugs/drug_piperaquine/Piperaquine_Chotsiri2017_reference.md) | — | 1-compartment (no model) | 0 | Chotsiri P et al., Population pharmacokinetics and electro…, British journal of clinical… (2017) | [10.1111/bcp.13372](https://doi.org/10.1111/bcp.13372) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Ding_2024_nonmem_estimates_rse_a](drugs/drug_piperaquine/Piperaquine_Ding2024_nonmem_estimates_rse_a.md) | — | parent + metabolite (no model) | 10 (+1 cov.) | Ding J et al., Population pharmacokinetics of amodiaqu…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bergstrand_2014_hazard_of_acquiring_a_malaria_infection](drugs/drug_piperaquine/pd_Bergstrand_2014_hazard_of_acquiring_a_malaria_infection.md) | hazard of acquiring a malaria infection ← piperaquine · direct sigmoid Emax (Hill) effect | — | Bergstrand M et al., Characterization of an in vivo concentr…, Science translational medic… (2014) | [10.1126/scitranslmed.3005311](https://doi.org/10.1126/scitranslmed.3005311) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gendrot_2020_SARS_CoV_2_replication_viral_load_by_RT_PCR](drugs/drug_piperaquine/pd_Gendrot_2020_SARS_CoV_2_replication_viral_load_by_RT_PCR.md) | SARS-CoV-2 replication (viral load by RT-PCR) ← piperaquine · direct sigmoid Emax (Hill) effect | — | Gendrot M et al., Antimalarial drugs inhibit the replicat…, Travel medicine and infecti… (2020) | [10.1016/j.tmaid.2020.101873](https://doi.org/10.1016/j.tmaid.2020.101873) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Leong_2018_QTcF](drugs/drug_piperaquine/pd_Leong_2018_QTcF.md) | change from baseline in QTcF (Fridericia-corrected QT interval) ← piperaquine · direct linear effect | — | Leong FJ et al., A phase 1 evaluation of the pharmacokin…, Malaria journal (2018) | [10.1186/s12936-017-2162-8](https://doi.org/10.1186/s12936-017-2162-8) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Moore_2015_M_P_PQ](drugs/drug_piperaquine/pd_Moore_2015_M_P_PQ.md) | piperaquine breast milk concentration (milk:plasma transfer) ← piperaquine · direct sigmoid Emax (Hill) effect | — | Moore BR et al., Pharmacokinetics of piperaquine transfe…, Antimicrobial agents and ch… (2015) | [10.1128/AAC.00327-15](https://doi.org/10.1128/AAC.00327-15) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zaloumis_2012_PCT_proportion_cured](drugs/drug_piperaquine/pd_Zaloumis_2012_PCT_proportion_cured.md) | parasite count (within-host parasite-time profile; outputs: proportion clinically cured and parasite clearance time) ← piperaquine · direct sigmoid Emax (Hill) effect | — | Zaloumis S et al., Assessing the utility of an anti-malari…, Malaria journal (2012) | [10.1186/1475-2875-11-303](https://doi.org/10.1186/1475-2875-11-303) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Patel_2014_parasite_density](drugs/drug_piperaquine/pd_Patel_2014_parasite_density.md) | parasite density ← piperaquine · indirect response — drug inhibits the production of parasite density | model (no simulator) | Patel K et al., Predicting the parasite killing effect…, The Journal of antimicrobia… (2014) | [10.1093/jac/dku120](https://doi.org/10.1093/jac/dku120) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wattanakul_2021_PCIR](drugs/drug_piperaquine/pd_Wattanakul_2021_PCIR.md) | total circulating parasites (P. falciparum parasite density) ← piperaquine · direct sigmoid Emax (Hill) effect | model (no simulator) | Wattanakul T et al., Semimechanistic Pharmacokinetic and Pha…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.01583-20](https://doi.org/10.1128/AAC.01583-20) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Felices_2025_QTcF](drugs/drug_piperaquine/pd_Felices_2025_QTcF.md) | change from baseline in Fridericia-corrected QT interval (placebo-corrected ΔΔQTcF) ← piperaquine · direct Emax (saturable) effect | model (no simulator) | Felices M et al., Concentration-Response Analysis of the…, Clinical and translational… (2025) | [10.1111/cts.70305](https://doi.org/10.1111/cts.70305) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wicha_2022_Pviable](drugs/drug_piperaquine/pd_Wicha_2022_Pviable.md) | viable parasites (parasite burden time course) ← piperaquine (PPQ) · direct sigmoid Emax (Hill) effect | model (no simulator) | Wicha SG et al., New, Antimicrobial agents and ch… (2022) | [10.1128/aac.00556-22](https://doi.org/10.1128/aac.00556-22) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=piperaquine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2C19` inhibitor/substrate, `CYP2C9` substrate, `CYP2E1` inducer, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 60 matched, 20 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 10  ·  extracted 5  ·  needs_review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tarning_2012.pdf` | Tarning J et al., Population pharmacokinetics and pharmac…, Clinical pharmacology and t… (2012) | popPK | 10 | [10.1038/clpt.2011.254](https://doi.org/10.1038/clpt.2011.254) | [22258469](https://pubmed.ncbi.nlm.nih.gov/22258469) | Population PK model of piperaquine in children is clearly relevant, but no numeric parameter values (CL, V, ka) appear in the evidence—likely in tables/supplementary material not provided. |
| `Millat-Martínez_2022.pdf` | Millat-Martínez P et al., Piperaquine Pharmacokinetic and Pharmac…, Antimicrobial agents and ch… (2022) | popPK | 8 | [10.1128/aac.00185-22](https://doi.org/10.1128/aac.00185-22) | [35862743](https://pubmed.ncbi.nlm.nih.gov/35862743) | Population PK-PD model of piperaquine in humans is described, but the numeric PK parameters (CL, V, etc.) are not present in the evidence, likely in supplementary material. |
| `Patel_2014.pdf` | Patel K et al., Predicting the parasite killing effect…, The Journal of antimicrobia… (2014) | popPK | 8 | [10.1093/jac/dku120](https://doi.org/10.1093/jac/dku120) | [24777899](https://pubmed.ncbi.nlm.nih.gov/24777899) | Mouse malaria model with population PK for piperaquine; CL (0.109 L/h) and two-compartment structure reported directly in the abstract. |
| `Vanachayangkul_2017.pdf` | Vanachayangkul P et al., Piperaquine Population Pharmacokinetics…, Antimicrobial agents and ch… (2017) | popPK | 8 | [10.1128/AAC.02000-16](https://doi.org/10.1128/AAC.02000-16) | [28193647](https://pubmed.ncbi.nlm.nih.gov/28193647) | Human population PK model of piperaquine (2-compartment, first-order absorption) is clearly described, but numeric parameter values (CL, V, ka) are not present in the provided evidence, likely in tables/supplement. |
| `Hughes_2022.pdf` | Hughes E et al., Piperaquine-Induced QTc Prolongation De…, Clinical infectious disease… (2022) | popPK | 6 | [10.1093/cid/ciab965](https://doi.org/10.1093/cid/ciab965) | [34864925](https://pubmed.ncbi.nlm.nih.gov/34864925) | Human population PK-QTc modeling of piperaquine in pregnant women, but the evidence only shows concentration-QTc slopes; PK parameters (CL, V) likely reside in supplementary material not provided. |
| `Moore_2015.pdf` | Moore BR et al., Pharmacokinetics of piperaquine transfe…, Antimicrobial agents and ch… (2015) | popPK | 6 | [10.1128/AAC.00327-15](https://doi.org/10.1128/AAC.00327-15) | [25963980](https://pubmed.ncbi.nlm.nih.gov/25963980) | Human population PK modeling of piperaquine in plasma and breast milk, but the numeric PK parameters (CL, V) are not shown in the abstract; only milk:plasma ratios and infant doses appear. |

<sub>queue written 2026-10-07T07:36:57.711846+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergstrand_2014 | irrelevant | 4 | 2 | This is a PK/PD concentration-effect (Emax) study, not a disposition-parameter report; the PK parameters used come from published data and no numeric CL/V values appear in the evidence. |
| popPK | Chairat_2018 | irrelevant | 0 | 0 | This is a population PK study of primaquine and carboxyprimaquine; piperaquine appears only as a co-administered interaction partner with no piperaquine PK parameters reported. |
| popPK | Felices_2025 | irrelevant | 2 | 1 | This is a concentration–QTc (PD) modeling study; no piperaquine PK disposition parameters (CL, V, ka, half-life with volume) are reported, only Cmax values and QTc model parameters. |
| popPK | Gendrot_2020 | irrelevant | 1 | 2 | In vitro SARS-CoV-2 study; piperaquine only has an EC50 (33.4 μM) and a literature Cmax (596 ng/ml), no PK disposition parameters (CL, V, half-life, model). |
| popPK | Hughes_2022 | relevant | 6 | 2 | Human population PK-QTc modeling of piperaquine in pregnant women, but the evidence only shows concentration-QTc slopes; PK parameters (CL, V) likely reside in supplementary material not provided. |
| popPK | Millat-Martínez_2022 | relevant | 8 | 2 | Population PK-PD model of piperaquine in humans is described, but the numeric PK parameters (CL, V, etc.) are not present in the evidence, likely in supplementary material. |
| popPK | Moore_2015 | relevant | 6 | 3 | Human population PK modeling of piperaquine in plasma and breast milk, but the numeric PK parameters (CL, V) are not shown in the abstract; only milk:plasma ratios and infant doses appear. |
| popPK | Persoons_2021 | irrelevant | 0 | 0 | In-vitro antiviral screening of quinoline analogues; piperaquine is only a test compound with no PK parameters, and no numeric PK values appear. |
| popPK | Staehli_2013 | relevant | 9 | 2 | Population PK (NONMEM, two-compartment) of piperaquine in malaria patients, but the numeric parameter table (Table 4) is not included in the evidence; only a stray Q value appears. |
| popPK | Tarning_2012 | relevant | 10 | 3 | Population PK model of piperaquine in children is clearly relevant, but no numeric parameter values (CL, V, ka) appear in the evidence—likely in tables/supplementary material not provided. |
| popPK | Vanachayangkul_2017 | relevant | 8 | 3 | Human population PK model of piperaquine (2-compartment, first-order absorption) is clearly described, but numeric parameter values (CL, V, ka) are not present in the provided evidence, likely in tables/supplement. |
| popPK | Wicha_2022 | irrelevant | 2 | 1 | This is an in vitro PD interaction-PRR assay study; piperaquine PK parameters (CL, V, etc.) are not reported, and model estimates live in supplementary tables not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:37 UTC</sub>
