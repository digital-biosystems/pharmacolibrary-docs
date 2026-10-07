<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;fenbendazole&quot;}]"></div>

# fenbendazole

- **generic name:** fenbendazole
- **ATC codes:** `P02CA06`
- **DrugBank:** [DB11410](https://go.drugbank.com/drugs/DB11410) · **PubChem:** not captured
- **molar mass:** 299.348 g/mol (C15H13N3O2S) — DrugBank
- **groups:** investigational, vet_approved

## About

Fenbendazole is an antinematodal drug used to treat worm (nematode) infections. It is an approved veterinary medicine and is not authorised for human use; in humans it remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q908013](https://www.wikidata.org/wiki/Q908013) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fenbendazole | parent | 299.348 | C15H13N3O2S | DrugBank | — | Bach_2021, Beier_2000 |
| fenbendazole sulphone | metabolite | — (mass units only) | — | — | — | — |
| oxfendazole | metabolite | 315.347 | C15H13N3O3S | PubChem | [40854](https://pubchem.ncbi.nlm.nih.gov/compound/40854) | Bach_2021 |
| oxfendazole sulfone | metabolite | 331.346 | C15H13N3O4S | PubChem | [162136](https://pubchem.ncbi.nlm.nih.gov/compound/162136) | Bach_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:26 | 8:46 | 0/2/1 | 5/0/0 | 0/0/0 | 444,408/36,362 | ollama / glm-5.3-flash | 9 | 3/6 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Beier_2000_reference](drugs/drug_fenbendazole/Fenbendazole_Beier2000_reference.md) | — | 1-compartment (no model) | 2 | Beier E et al., Oral pharmacokinetics of fenbendazole i…, Small ruminant research : t… (2000) | [10.1016/s0921-4488(00)00124-3](https://doi.org/10.1016/s0921-4488(00)00124-3) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Bach_2021_reference](drugs/drug_fenbendazole/Fenbendazole_Bach2021_reference.md) | — | general linear (no model) | 9 | Bach T et al., Population Pharmacokinetic Model of Oxf…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.02129-20](https://doi.org/10.1128/AAC.02129-20) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Mackintosh_1985_reference](drugs/drug_fenbendazole/Fenbendazole_Mackintosh1985_reference.md) | — | general linear (no model) | 0 | Mackintosh CG et al., Efficacy and pharmacokinetics of febant…, New Zealand veterinary jour… (1985) | [10.1080/00480169.1985.35194](https://doi.org/10.1080/00480169.1985.35194) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Dong_2025_EC50](drugs/drug_fenbendazole/pd_Dong_2025_EC50.md) | Parasite mortality (anthelmintic efficacy against G. kobayashii, bath exposure) ← fenbendazole · inhibition effect | — | Dong J et al., Preclinical Evaluation of Fenbendazole…, Animals : an open access jo… (2025) | [10.3390/ani15121811](https://doi.org/10.3390/ani15121811) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Dong_2025_LC50](drugs/drug_fenbendazole/pd_Dong_2025_LC50.md) | Goldfish mortality (acute toxicity, bath exposure) ← fenbendazole · model not identified | — | Dong J et al., Preclinical Evaluation of Fenbendazole…, Animals : an open access jo… (2025) | [10.3390/ani15121811](https://doi.org/10.3390/ani15121811) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span> | [Feyera_2022_LDA](drugs/drug_fenbendazole/pd_Feyera_2022_LDA.md) | inhibition of egg embryonation (in-ovo larval development assay) ← fenbendazole · direct sigmoid Emax (Hill) effect | — | Feyera T et al., Evaluation of, Journal of helminthology (2022) | [10.1017/S0022149X22000177](https://doi.org/10.1017/S0022149X22000177) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span> | [Feyera_2022_LMIA](drugs/drug_fenbendazole/pd_Feyera_2022_LMIA.md) | inhibition of larval migration (larval migration inhibition assay) ← fenbendazole · direct sigmoid Emax (Hill) effect | — | Feyera T et al., Evaluation of, Journal of helminthology (2022) | [10.1017/S0022149X22000177](https://doi.org/10.1017/S0022149X22000177) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">goat</span> | [Guinda_2025_EHT_hatch_rate](drugs/drug_fenbendazole/pd_Guinda_2025_EHT_hatch_rate.md) | Percentage of hatched eggs (inhibition of larval hatching) in the egg hatch test ← thiabendazole (TBZ; surrogate for benzimidazoles/fenbendazole) · direct sigmoid Emax (Hill) effect | — | Guinda EFX et al., Efficacy of fenbendazole against gastro…, International journal for p… (2025) | [10.1016/j.ijpddr.2024.100572](https://doi.org/10.1016/j.ijpddr.2024.100572) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wang_2021_EC50](drugs/drug_fenbendazole/pd_Wang_2021_EC50.md) | spore germination inhibition of nematophagous fungi ← fenbendazole · inhibition effect | — | Wang B et al., In vitro assays on the susceptibility o…, Letters in applied microbio… (2021) | [10.1111/lam.13462](https://doi.org/10.1111/lam.13462) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhao_2017_larval_migration](drugs/drug_fenbendazole/pd_Zhao_2017_larval_migration.md) | percentage of larvae migrated to the surface (larval migration inhibition) ← fenbendazole · direct sigmoid Emax (Hill) effect | — | Zhao J et al., An in vitro larval migration assay for…, Veterinary parasitology (2017) | [10.1016/j.vetpar.2017.03.014](https://doi.org/10.1016/j.vetpar.2017.03.014) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Beier_2000.pdf` | Beier E et al., Oral pharmacokinetics of fenbendazole i…, Small ruminant research : t… (2000) | popPK | 9 | [10.1016/s0921-4488(00)00124-3](https://doi.org/10.1016/s0921-4488(00)00124-3) | [10867318](https://pubmed.ncbi.nlm.nih.gov/10867318) | Original PK study in llamas with numeric compartmental parameters (Vd, half-lives, AUC, Tmax, Cmax) reported directly in the abstract. |
| `Melian_2021.pdf` | Melian ME et al., Improving the in vitro dissolution rate…, Research in veterinary scie… (2021) | popPK | 8 | [10.1016/j.rvsc.2021.12.001](https://doi.org/10.1016/j.rvsc.2021.12.001) | [34922278](https://pubmed.ncbi.nlm.nih.gov/34922278) | Population PK parameters of FBZ in sheep were estimated, but only Cmax/AUC values appear in the abstract; the population PK parameter values likely reside in tables/supplementary material not provided. |
| `Howard_2014.pdf` | Howard JT et al., The effect of breed and sex on sulfamet…, Journal of veterinary pharm… (2014) | popPK | 7 | [10.1111/jvp.12128](https://doi.org/10.1111/jvp.12128) | [24731191](https://pubmed.ncbi.nlm.nih.gov/24731191) | Fenbendazole PK (with oxfendazole metabolite) was measured in swine via non-compartmental analysis, but no numeric parameter values appear in the evidence, only P-values. |
| `Mackintosh_1985.pdf` | Mackintosh CG et al., Efficacy and pharmacokinetics of febant…, New Zealand veterinary jour… (1985) | popPK | 7 | [10.1080/00480169.1985.35194](https://doi.org/10.1080/00480169.1985.35194) | [16031188](https://pubmed.ncbi.nlm.nih.gov/16031188) | Fenbendazole (as febantel metabolite) plasma curves fitted by a compartmental model with peak levels/times reported, but full PK parameters (CL, V, half-life) not given numerically. |

<sub>queue written 2026-10-07T10:19:23.494923+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dong_2025 | irrelevant | 0 | 0 | Efficacy/safety study of fenbendazole in goldfish with no PK disposition parameters (no CL, V, ka, half-life, or PK model); only EC50/LC50 dose-response values. |
| popPK | Feyera_2022 | irrelevant | 0 | 0 | In vitro anthelmintic efficacy assay (EC50 values) in chicken parasite larvae, no PK disposition parameters for fenbendazole. |
| popPK | Fischer_2025 | irrelevant | 0 | 0 | This is an anthelmintic resistance study (FECRT, amplicon sequencing, larval development assay) using fenbendazole only as a treatment; no PK parameters are reported. |
| popPK | Guinda_2025 | irrelevant | 0 | 0 | This is an anthelmintic efficacy/resistance study (FECRT, EHT, sequencing) in goats; no PK parameters for fenbendazole are reported. |
| popPK | Howard_2014 | relevant | 7 | 3 | Fenbendazole PK (with oxfendazole metabolite) was measured in swine via non-compartmental analysis, but no numeric parameter values appear in the evidence, only P-values. |
| popPK | Long_2026 | irrelevant | 0 | 0 | Fenbendazole is only a comparator in an antifungal drug-discovery study; no PK parameters reported. |
| popPK | Melian_2021 | relevant | 8 | 4 | Population PK parameters of FBZ in sheep were estimated, but only Cmax/AUC values appear in the abstract; the population PK parameter values likely reside in tables/supplementary material not provided. |
| popPK | Oh_2006 | irrelevant | 0 | 0 | Ecotoxicity study (EC50, hazard quotients) with no pharmacokinetic disposition parameters for fenbendazole. |
| popPK | Petersen_1997 | irrelevant | 0 | 0 | In-vitro efficacy assay of benzimidazoles against worms; no pharmacokinetic parameters for fenbendazole. |
| popPK | Prichard_1981 | irrelevant | 4 | 2 | Cattle PK study of fenbendazole, but only descriptive percentages and Tmax are given; no CL/V/ka/half-life values or model parameters appear in the evidence. |
| popPK | Rabelo_2024 | irrelevant | 0 | 0 | In silico/in vitro antiviral drug-repurposing study of oxibendazole; fenbendazole is only a comparator analog with no PK parameters reported. |
| popPK | Viviani_2019 | irrelevant | 4 | 2 | Fenbendazole appears only as a metabolite/analyte of oxfendazole dosing, and no numeric PK parameter values are present in the evidence (non-compartmental results not shown). |
| popPK | Wang_2021 | irrelevant | 0 | 0 | In vitro susceptibility study of fungi with EC50 values, not a pharmacokinetic study of fenbendazole disposition. |
| popPK | Zhao_2017 | irrelevant | 0 | 0 | In vitro larval migration assay reporting only EC50 values, no pharmacokinetic disposition parameters for fenbendazole. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:19 UTC</sub>
