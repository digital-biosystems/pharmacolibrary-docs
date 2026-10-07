<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;amodiaquine&quot;}]"></div>

# amodiaquine

- **generic name:** amodiaquine
- **ATC codes:** `P01BA06`, `P01BF03`
- **DrugBank:** [DB00613](https://go.drugbank.com/drugs/DB00613) · **PubChem:** [CID 2165](https://pubchem.ncbi.nlm.nih.gov/compound/2165)
- **molar mass:** 355.861 g/mol (C20H22ClN3O) — DrugBank
- **groups:** approved, investigational

## About

Amodiaquine is an antimalarial medicine used to treat malaria. It is on the WHO list of essential medicines and is also available in combination with artemisinin derivatives; it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q239569](https://www.wikidata.org/wiki/Q239569) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| amodiaquine | parent | 355.861 | C20H22ClN3O | DrugBank | [2165](https://pubchem.ncbi.nlm.nih.gov/compound/2165) | Ali_2018, Ding_2020, Ding_2024, Stepniewska_2009 |
| desethylamodiaquine | metabolite | 327.812 | C18H18ClN3O | PubChem | [122068](https://pubchem.ncbi.nlm.nih.gov/compound/122068) | Ali_2018, Ding_2020, Ding_2024, Stepniewska_2009 |
| dihydroartemisinin | metabolite | 284.9 | — | the paper | — | Stepniewska_2009 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:51 | 10:47 | 4/1/1 | 3/0/2 | 0/0/0 | 536,917/36,503 | ollama / glm-5.3-flash | 13 | 0/13 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ali_2018_typical_valuea](drugs/drug_amodiaquine/Amodiaquine_Ali2018_typical_valuea.md) | model (no simulator) | 1-compartment, oral | 15 (+2 cov.) | Ali AM et al., Population Pharmacokinetics of the Anti…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.02193-17](https://doi.org/10.1128/AAC.02193-17) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ding_2020_reference](drugs/drug_amodiaquine/Amodiaquine_Ding2020_reference.md) | model (no simulator) | 1-compartment, oral | 12 | Ding J et al., Adherence and Population Pharmacokineti…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1707](https://doi.org/10.1002/cpt.1707) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ding_2024_nonmem_estimates_rse_a](drugs/drug_amodiaquine/Amodiaquine_Ding2024_nonmem_estimates_rse_a.md) | model (no simulator) | 1-compartment, oral | 10 (+1 cov.) | Ding J et al., Population pharmacokinetics of amodiaqu…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ding_2024_nonmem_population_estimates_rse_a](drugs/drug_amodiaquine/Amodiaquine_Ding2024_nonmem_population_estimates_rse_a.md) | held back | 1-compartment, oral | 9 | Ding J et al., Population pharmacokinetics of amodiaqu…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Ali_2018_bsv_or_bova_b](drugs/drug_amodiaquine/Amodiaquine_Ali2018_bsv_or_bova_b.md) | — | parent + metabolite (no model) | 1 | Ali AM et al., Population Pharmacokinetics of the Anti…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.02193-17](https://doi.org/10.1128/AAC.02193-17) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Stepniewska_2009_reference](drugs/drug_amodiaquine/Amodiaquine_Stepniewska2009_reference.md) | — | general linear (no model) | 8 (+2 cov.) | Stepniewska K et al., Population pharmacokinetics of artesuna…, Malaria journal (2009) | [10.1186/1475-2875-8-200](https://doi.org/10.1186/1475-2875-8-200) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Boonyasuppayakorn_2014_CC50](drugs/drug_amodiaquine/pd_Boonyasuppayakorn_2014_CC50.md) | Cell viability (cytotoxicity, CC50) ← amodiaquine · direct Emax (saturable) effect | — | Boonyasuppayakorn S et al., Amodiaquine, an antimalarial drug, inhi…, Antiviral research (2014) | [10.1016/j.antiviral.2014.03.014](https://doi.org/10.1016/j.antiviral.2014.03.014) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Boonyasuppayakorn_2014_DENV2_replicon](drugs/drug_amodiaquine/pd_Boonyasuppayakorn_2014_DENV2_replicon.md) | DENV2 replicon replication (Rluc activity, % inhibition) ← amodiaquine · direct Emax (saturable) effect | — | Boonyasuppayakorn S et al., Amodiaquine, an antimalarial drug, inhi…, Antiviral research (2014) | [10.1016/j.antiviral.2014.03.014](https://doi.org/10.1016/j.antiviral.2014.03.014) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Boonyasuppayakorn_2014_DENV4_replicon](drugs/drug_amodiaquine/pd_Boonyasuppayakorn_2014_DENV4_replicon.md) | DENV4 replicon replication (Rluc activity, % inhibition) ← amodiaquine · direct Emax (saturable) effect | — | Boonyasuppayakorn S et al., Amodiaquine, an antimalarial drug, inhi…, Antiviral research (2014) | [10.1016/j.antiviral.2014.03.014](https://doi.org/10.1016/j.antiviral.2014.03.014) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Boonyasuppayakorn_2014_PFU_ml](drugs/drug_amodiaquine/pd_Boonyasuppayakorn_2014_PFU_ml.md) | DENV2 infectivity (virus titer by plaque assay) ← amodiaquine · direct Emax (saturable) effect | — | Boonyasuppayakorn S et al., Amodiaquine, an antimalarial drug, inhi…, Antiviral research (2014) | [10.1016/j.antiviral.2014.03.014](https://doi.org/10.1016/j.antiviral.2014.03.014) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Boonyasuppayakorn_2014_WNV_replicon](drugs/drug_amodiaquine/pd_Boonyasuppayakorn_2014_WNV_replicon.md) | WNV replicon replication (Rluc activity, % inhibition) ← amodiaquine · direct Emax (saturable) effect | — | Boonyasuppayakorn S et al., Amodiaquine, an antimalarial drug, inhi…, Antiviral research (2014) | [10.1016/j.antiviral.2014.03.014](https://doi.org/10.1016/j.antiviral.2014.03.014) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gendrot_2020_SARS_CoV_2_replication_viral_RNA_by_RT_PCR](drugs/drug_amodiaquine/pd_Gendrot_2020_SARS_CoV_2_replication_viral_RNA_by_RT_PCR.md) | SARS-CoV-2 replication (viral RNA by RT-PCR) ← desethylamodiaquine · direct sigmoid Emax (Hill) effect | — | Gendrot M et al., Antimalarial drugs inhibit the replicat…, Travel medicine and infecti… (2020) | [10.1016/j.tmaid.2020.101873](https://doi.org/10.1016/j.tmaid.2020.101873) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gerstner_2003_inhibition_of_schizont_maturation](drugs/drug_amodiaquine/pd_Gerstner_2003_inhibition_of_schizont_maturation.md) | inhibition of schizont maturation ← amodiaquine · direct log-linear effect | — | Gerstner U et al., Comparison of the in-vitro activity of…, Wiener klinische Wochenschr… (2003) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bocci_2020_CPE](drugs/drug_amodiaquine/pd_Bocci_2020_CPE.md) | SARS-CoV-2 cytopathic effect (Vero E6 cell viability, dose–response) ← amodiaquine · direct sigmoid Emax (Hill) effect | model (no simulator) | Bocci G et al., Virtual and, ACS pharmacology & translat… (2020) | [10.1021/acsptsci.0c00131](https://doi.org/10.1021/acsptsci.0c00131) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Tarning_2012_recurrent_malaria_infections](drugs/drug_amodiaquine/pd_Tarning_2012_recurrent_malaria_infections.md) | recurrent malaria infections ← desethylamodiaquine · time-to-event model | — | Tarning J et al., Population pharmacokinetic and pharmaco…, Antimicrobial agents and ch… (2012) | [10.1128/AAC.01242-12](https://doi.org/10.1128/AAC.01242-12) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=amodiaquine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2C9` inhibitor, `CYP2D6` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate, `CYP1B1` substrate | DrugBank actor |
| metabolism | skin | `CYP1B1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HNMT (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 52 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 4  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tarning_2012.pdf` | Tarning J et al., Population pharmacokinetic and pharmaco…, Antimicrobial agents and ch… (2012) | popPK | 10 | [10.1128/AAC.01242-12](https://doi.org/10.1128/AAC.01242-12) | [22926572](https://pubmed.ncbi.nlm.nih.gov/22926572) | Population PK model of amodiaquine and desethylamodiaquine in pregnant women, but numeric parameter values are not present in the provided evidence (likely in tables/figures not included). |

<sub>queue written 2026-10-07T05:41:27.709533+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abla_2024 | relevant | 4 | 3 | PBPK modeling of amodiaquine and its metabolite DEAQ with predicted concentration values present, but the actual PK parameters (CL, V, ka) live in a previously published compound file (ref 29) not included here. |
| popPK | Baba_2023 | irrelevant | 0 | 0 | In-vitro antiviral study of amodiaquine derivatives; PK mentioned only qualitatively (poor bioavailability in mice) with no numeric disposition parameters. |
| popPK | Bocci_2020 | irrelevant | 2 | 1 | This is an in vitro/virtual screening COVID-19 drug-repositioning study; amodiaquine PK values (half-life ~20 h, clearance) appear only as brief literature citations, not a PK study of amodiaquine itself. |
| popPK | Boonyasuppayakorn_2014 | irrelevant | 0 | 0 | This is an in-vitro antiviral (dengue) efficacy study of amodiaquine with EC50/CC50 values, not a PK study reporting disposition parameters. |
| popPK | Chan_2023 | relevant | 8 | 2 | A population PK model of amodiaquine and desethylamodiaquine was developed in NONMEM, but the numeric parameter estimates are in Table S1/supplementary material not provided in the evidence. |
| popPK | Ding_2026 | relevant | 9 | 2 | A population PK model of amodiaquine and its metabolite desethylamodiaquine was developed in malaria patients, but the numeric amodiaquine parameter estimates (CL, V, ka) are not present in the provided evidence — they appear to live in tables/supplementary material not included. |
| popPK | Gendrot_2020 | irrelevant | 2 | 3 | In vitro SARS-CoV-2 study; only literature-derived Cmax and t1/2 for desethylamodiaquine (metabolite) are cited, no PK model or disposition parameters for amodiaquine itself. |
| popPK | Gerstner_2003 | irrelevant | 0 | 0 | In-vitro susceptibility study of Plasmodium falciparum isolates; no PK disposition parameters for amodiaquine are reported. |
| popPK | Han_2018 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study with no pharmacokinetic parameters for amodiaquine. |
| popPK | Kawuma_2021 | irrelevant | 2 | 0 | Amodiaquine is only a co-administered interaction probe; the PK model and all numeric parameters are for dolutegravir, not amodiaquine. |
| popPK | Kazakova_2024 | irrelevant | 0 | 0 | Amodiaquine is only a positive control in an in-vitro antiviral assay; no PK parameters reported. |
| popPK | Lamsfus_2024 | irrelevant | 0 | 0 | The paper models HRP2 antigen clearance, not amodiaquine PK; amodiaquine is only the co-administered treatment and no amodiaquine disposition parameters are reported. |
| popPK | Persoons_2021 | irrelevant | 0 | 0 | In-vitro antiviral study of quinoline analogues including amodiaquine; no PK parameters (CL, V, half-life, or PK model) for amodiaquine are reported. |
| popPK | Tarning_2012 | relevant | 10 | 3 | Population PK model of amodiaquine and desethylamodiaquine in pregnant women, but numeric parameter values are not present in the provided evidence (likely in tables/figures not included). |
| popPK | de_2018 | irrelevant | 0 | 0 | This is a population PK study of sulfadoxine and pyrimethamine; amodiaquine is only mentioned as a co-administered drug in SMC, with no amodiaquine PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:41 UTC</sub>
