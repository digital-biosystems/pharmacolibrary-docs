<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;moxidectin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Moxidectin_Chhonker2023_reference&quot;,&quot;label&quot;:&quot;Chhonker_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxidectin/Moxidectin_Chhonker2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moxidectin_Smit2022_reference&quot;,&quot;label&quot;:&quot;Smit_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxidectin/Moxidectin_Smit2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# moxidectin

- **generic name:** moxidectin
- **ATC codes:** `P02CX03`
- **DrugBank:** [DB11431](https://go.drugbank.com/drugs/DB11431) · **PubChem:** not captured
- **molar mass:** 639.83 g/mol (C37H53NO8) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Moxidectin is an antinematodal drug used to treat parasitic worm infections, notably onchocerciasis, and is also used in veterinary medicine. It is approved for human use in the United States and is also widely used as a veterinary antiparasitic.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q903824](https://www.wikidata.org/wiki/Q903824) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| moxidectin | parent | 639.83 | C37H53NO8 | DrugBank | — | Alvinerie_1998, Opoku_2025, Smit_2022, Vanapalli_2002, Wood_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:01 | 7:34 | 2/3/1 | 8/0/0 | 0/0/0 | 343,697/28,114 | ollama / glm-5.3-flash | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chhonker_2023_reference](drugs/drug_moxidectin/Moxidectin_Chhonker2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Chhonker YS et al., Pharmacokinetics of Moxidectin combined…, PLoS neglected tropical dis… (2023) | [10.1371/journal.pntd.0011567](https://doi.org/10.1371/journal.pntd.0011567) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Smit_2022_reference](drugs/drug_moxidectin/Moxidectin_Smit2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+4 cov.) | Smit C et al., Characterization of the Population Phar…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01048-4](https://doi.org/10.1007/s40262-021-01048-4) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q3, Q79 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Wood_2024_reference](drugs/drug_moxidectin/Moxidectin_Wood2024_reference.md) | — | 1-compartment (no model) | 8 | Wood ND et al., The use of quantitative clinical pharma…, PLoS neglected tropical dis… (2024) | [10.1371/journal.pntd.0012351](https://doi.org/10.1371/journal.pntd.0012351) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Alvinerie_1998_reference](drugs/drug_moxidectin/Moxidectin_Alvinerie1998_reference.md) | — | 1-compartment (no model) | 2 | Alvinerie M et al., The pharmacokinetics of moxidectin afte…, Veterinary research (1998) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Opoku_2025_reference](drugs/drug_moxidectin/Moxidectin_Opoku2025_reference.md) | — | 1-compartment (no model) | 4 | Opoku NO et al., Identification of a moxidectin dose for…, Parasites & vectors (2025) | [10.1186/s13071-025-06891-z](https://doi.org/10.1186/s13071-025-06891-z) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Vanapalli_2002_reference](drugs/drug_moxidectin/Moxidectin_Vanapalli2002_reference.md) | — | 1-compartment (no model) | 3 | Vanapalli SR et al., Pharmacokinetics and dose proportionali…, Biopharmaceutics & drug dis… (2002) | [10.1002/bdd.313](https://doi.org/10.1002/bdd.313) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span> | [Almeida_2013_LMIT](drugs/drug_moxidectin/pd_Almeida_2013_LMIT.md) | Larval migration inhibition (larval migration inhibition test, LMIT) ← moxidectin · direct sigmoid Emax (Hill) effect | — | Almeida GD et al., Ivermectin and moxidectin resistance ch…, Veterinary parasitology (2013) | [10.1016/j.vetpar.2012.08.012](https://doi.org/10.1016/j.vetpar.2012.08.012) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [George_2018_MI](drugs/drug_moxidectin/pd_George_2018_MI.md) | Inhibition of motility of third-stage larvae (Worminator, AM-susceptible Cooperia spp. TGA-2013) ← moxidectin · direct sigmoid Emax (Hill) effect | — | George MM et al., Motility in the L3 stage is a poor phen…, International journal for p… (2018) | [10.1016/j.ijpddr.2017.12.002](https://doi.org/10.1016/j.ijpddr.2017.12.002) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [George_2018_MI_2](drugs/drug_moxidectin/pd_George_2018_MI_2.md) | Inhibition of motility of third-stage larvae (Worminator, AM-resistant Cooperia spp. CGA-2014) ← moxidectin · direct sigmoid Emax (Hill) effect | — | George MM et al., Motility in the L3 stage is a poor phen…, International journal for p… (2018) | [10.1016/j.ijpddr.2017.12.002](https://doi.org/10.1016/j.ijpddr.2017.12.002) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [George_2018_MI_3](drugs/drug_moxidectin/pd_George_2018_MI_3.md) | Inhibition of motility of third-stage larvae (Worminator, AM-susceptible H. contortus UGA-SUSC) ← moxidectin · direct sigmoid Emax (Hill) effect | — | George MM et al., Motility in the L3 stage is a poor phen…, International journal for p… (2018) | [10.1016/j.ijpddr.2017.12.002](https://doi.org/10.1016/j.ijpddr.2017.12.002) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [George_2018_MI_4](drugs/drug_moxidectin/pd_George_2018_MI_4.md) | Inhibition of motility of third-stage larvae (Worminator, AM-resistant H. contortus UGA-2004) ← moxidectin · direct sigmoid Emax (Hill) effect | — | George MM et al., Motility in the L3 stage is a poor phen…, International journal for p… (2018) | [10.1016/j.ijpddr.2017.12.002](https://doi.org/10.1016/j.ijpddr.2017.12.002) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hofmann_2021_cure_rate](drugs/drug_moxidectin/pd_Hofmann_2021_cure_rate.md) | Cure rate against S stercoralis ← moxidectin · direct Emax (saturable) effect | — | Hofmann D et al., Efficacy and safety of ascending doses…, The Lancet. Infectious dise… (2021) | [10.1016/S1473-3099(20)30691-5](https://doi.org/10.1016/S1473-3099(20)30691-5) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span> | [Kotze_2025_Larval_mortality_of_Lucilia_cuprina](drugs/drug_moxidectin/pd_Kotze_2025_Larval_mortality_of_Lucilia_cuprina.md) | Larval mortality of Lucilia cuprina ← moxidectin · direct sigmoid Emax (Hill) effect | — | Kotze AC et al., Antagonistic interactions between spino…, Veterinary parasitology (2025) | [10.1016/j.vetpar.2024.110389](https://doi.org/10.1016/j.vetpar.2024.110389) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Molento_2018_LMAT](drugs/drug_moxidectin/pd_Molento_2018_LMAT.md) | Larval migration (larval migration on agar test against cyathostomin infective-stage larvae) ← moxidectin · direct sigmoid Emax (Hill) effect | — | Molento MB et al., In vitro evaluation of ivermectin, moxi…, Revista brasileira de paras… (2018) | [10.1590/S1984-29612017055](https://doi.org/10.1590/S1984-29612017055) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Muniz_2021_hatching_rate](drugs/drug_moxidectin/pd_Muniz_2021_hatching_rate.md) | hatching rate ← moxidectin · direct sigmoid Emax (Hill) effect | — | Muniz MS et al., Moxidectin toxicity to zebrafish embryo…, Environmental pollution (Ba… (2021) | [10.1016/j.envpol.2021.117096](https://doi.org/10.1016/j.envpol.2021.117096) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Ménez_2012_GABA_potentiation](drugs/drug_moxidectin/pd_M_nez_2012_GABA_potentiation.md) | Potentiation of GABA-induced current in rat α1β2γ2 GABA(A) receptors expressed in Xenopus oocytes ← moxidectin · direct sigmoid Emax (Hill) effect | — | Ménez C et al., Relative neurotoxicity of ivermectin an…, PLoS neglected tropical dis… (2012) | [10.1371/journal.pntd.0001883](https://doi.org/10.1371/journal.pntd.0001883) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhang_2020_TMEM16A_current](drugs/drug_moxidectin/pd_Zhang_2020_TMEM16A_current.md) | TMEM16A mediated currents (inhibition) ← moxidectin · direct Emax (saturable) effect | — | Zhang X et al., Inhibition of TMEM16A Ca, Pharmacological research (2020) | [10.1016/j.phrs.2020.104763](https://doi.org/10.1016/j.phrs.2020.104763) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=moxidectin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CYP2B (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 26 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 6  ·  extracted 2  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vanapalli_2002.pdf` | Vanapalli SR et al., Pharmacokinetics and dose proportionali…, Biopharmaceutics & drug dis… (2002) | popPK | 9 | [10.1002/bdd.313](https://doi.org/10.1002/bdd.313) | [12355577](https://pubmed.ncbi.nlm.nih.gov/12355577) | Population PK of moxidectin in dogs with numeric summary values (t½ 458 h, absorption half-life 0.6 h) in abstract, but full parameter values (CL, V, Q, ka) likely in tables not shown. |
| `Alvinerie_1998.pdf` | Alvinerie M et al., The pharmacokinetics of moxidectin afte…, Veterinary research (1998) | popPK | 8 | not captured | [9601143](https://pubmed.ncbi.nlm.nih.gov/9601143) | Original PK study in sheep with two-compartment model and numeric values (Cmax, Tmax, MRT) reported in abstract, though CL/V and full compartmental parameters may be in tables not shown. |
| `Herrera_2026.pdf` | Herrera R et al., Integrated pharmacokinetic-pharmacodyna…, Veterinary parasitology (2026) | popPK | 5 | [10.1016/j.vetpar.2025.110681](https://doi.org/10.1016/j.vetpar.2025.110681) | [41468861](https://pubmed.ncbi.nlm.nih.gov/41468861) | Moxidectin plasma PK (Cmax, AUC) in sheep is reported, but numeric disposition parameter values (CL, V, half-life) are not shown in the provided evidence. |

<sub>queue written 2026-10-07T10:54:21.326005+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Almeida_2013 | irrelevant | 0 | 0 | In-vitro larval migration assay reporting EC50 resistance values, not pharmacokinetic disposition parameters for moxidectin. |
| popPK | George_2018 | irrelevant | 0 | 0 | In vitro larval motility/resistance assay study; no PK disposition parameters for moxidectin, only EC50 values and a mention of peak plasma levels without values. |
| popPK | Herrera_2026 | relevant | 5 | 3 | Moxidectin plasma PK (Cmax, AUC) in sheep is reported, but numeric disposition parameter values (CL, V, half-life) are not shown in the provided evidence. |
| popPK | Hofmann_2021 | irrelevant | 2 | 0 | This is an efficacy/safety dose-ranging trial with no PK disposition parameters reported; no numeric PK values appear in the evidence. |
| popPK | Kinrade_2018 | irrelevant | 3 | 2 | This is a cardiac safety (concentration-QT) study; only Cmax/Tmax are reported and no disposition parameters (CL, V, half-life) appear — PK details are in figures/supplementary material not provided. |
| popPK | Kotze_2025 | irrelevant | 0 | 0 | In-vitro efficacy/drug-interaction bioassay in blowfly larvae; no PK disposition parameters for moxidectin. |
| popPK | Molento_2018 | irrelevant | 0 | 0 | In vitro larval migration assay reporting EC50 efficacy values, not pharmacokinetic disposition parameters for moxidectin. |
| popPK | Muniz_2021 | irrelevant | 1 | 1 | Toxicity/bioaccumulation study in zebrafish embryos; no PK disposition parameters (CL, V, half-life, model) reported. |
| popPK | Munn_2024 | irrelevant | 2 | 2 | Moxidectin is used only as an in vivo internal standard; the PK model and parameters (central volume, clearance, half-life) are for carprofen, and moxidectin's own disposition parameters are not estimated (only cited half-life of ~18 days from prior literature). |
| popPK | Ménez_2012 | irrelevant | 1 | 1 | Neurotoxicity/GABA receptor study in mice; no PK disposition parameters (CL, V, ka, half-life) for moxidectin, only brain/plasma concentration ratios. |
| popPK | Opoku_2018 | irrelevant | 0 | 0 | This is a phase 3 efficacy/safety trial of moxidectin for onchocerciasis with no pharmacokinetic parameters reported. |
| popPK | Raw_2024 | irrelevant | 0 | 0 | Efficacy trial of antiparasitic treatments in dogs; no PK parameters for moxidectin are reported, only a passing mention of clearance variability. |
| popPK | Yilmaz_2019 | irrelevant | 0 | 0 | In-vitro C. elegans susceptibility study with no PK parameters for moxidectin. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | In-vitro channel inhibition study (IC50 for TMEM16A), not a PK study of moxidectin disposition. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:54 UTC</sub>
