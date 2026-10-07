<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;zolpidem&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zolpidem_Cha2024_reference&quot;,&quot;label&quot;:&quot;Cha_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zolpidem/Zolpidem_Cha2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zolpidem_Kim2026_reference&quot;,&quot;label&quot;:&quot;Kim_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zolpidem/Zolpidem_Kim2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zolpidem_Yoon2021_reference&quot;,&quot;label&quot;:&quot;Yoon_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zolpidem/Zolpidem_Yoon2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# zolpidem

- **generic name:** zolpidem
- **ATC codes:** `N05CF02`
- **DrugBank:** [DB00425](https://go.drugbank.com/drugs/DB00425) · **PubChem:** [CID 5732](https://pubchem.ncbi.nlm.nih.gov/compound/5732)
- **molar mass:** 307.3895 g/mol (C19H21N3O) — DrugBank
- **groups:** approved, investigational

## About

Zolpidem is a sedative-hypnotic used to treat insomnia and other sleep disorders. It is an approved medicine, widely used as a short-term sleep aid, though it is a controlled drug in many countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q218842](https://www.wikidata.org/wiki/Q218842) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zolpidem | parent | 307.389 | C19H21N3O | DrugBank | [5732](https://pubchem.ncbi.nlm.nih.gov/compound/5732) | Cha_2024, Kim_2026, Stockmann_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:14 | 4:49 | 3/0/1 | 3/0/1 | 0/0/0 | 260,937/18,282 | ollama / glm-5.3-flash | 6 | 3/3 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Cha_2024_reference](drugs/drug_zolpidem/Zolpidem_Cha2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Cha HJ et al., Development of a Web Application for Si…, Pharmaceutics (2024) | [10.3390/pharmaceutics16050689](https://doi.org/10.3390/pharmaceutics16050689) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kim_2026_reference](drugs/drug_zolpidem/Zolpidem_Kim2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Kim HC et al., Population Pharmacokinetic-Pharmacodyna…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70208](https://doi.org/10.1002/psp4.70208) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yoon_2021_reference](drugs/drug_zolpidem/Zolpidem_Yoon2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Yoon S et al., Effect of CYP3A4 metabolism on sex diff…, Scientific reports (2021) | [10.1038/s41598-021-98689-z](https://doi.org/10.1038/s41598-021-98689-z) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Stockmann_2014_reference](drugs/drug_zolpidem/Zolpidem_Stockmann2014_reference.md) | — | 1-compartment (no model) | 3 | Stockmann C et al., Preliminary assessment of zolpidem phar…, Therapeutic drug monitoring (2014) | [10.1097/FTD.0000000000000017](https://doi.org/10.1097/FTD.0000000000000017) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kim_2026_CRT](drugs/drug_zolpidem/pd_Kim_2026_CRT.md) | choice reaction time ← zolpidem · direct sigmoid Emax (Hill) effect | — | Kim HC et al., Population Pharmacokinetic-Pharmacodyna…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70208](https://doi.org/10.1002/psp4.70208) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Kim_2026_DSST](drugs/drug_zolpidem/pd_Kim_2026_DSST.md) | digit symbol substitution test ← zolpidem · direct sigmoid Emax (Hill) effect | model (no simulator) | Kim HC et al., Population Pharmacokinetic-Pharmacodyna…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70208](https://doi.org/10.1002/psp4.70208) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kim_2026_VAS](drugs/drug_zolpidem/pd_Kim_2026_VAS.md) | sedation visual analog scale ← zolpidem · direct sigmoid Emax (Hill) effect | — | Kim HC et al., Population Pharmacokinetic-Pharmacodyna…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70208](https://doi.org/10.1002/psp4.70208) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Tuk_2002_EEG_amplitude](drugs/drug_zolpidem/pd_Tuk_2002_EEG_amplitude.md) | amplitude in the 11.5-30 Hz frequency band of the EEG ← zolpidem · direct sigmoid Emax (Hill) effect | — | Tuk B et al., Mechanism-based pharmacodynamic modelin…, Journal of pharmacokinetics… (2002) | [10.1023/a:1020202806759](https://doi.org/10.1023/a:1020202806759) |
| <span class="pk-badge pk-badge--green">extracted</span> | [de_2010_EEG_alpha_power](drugs/drug_zolpidem/pd_de_2010_EEG_alpha_power.md) | EEG alpha power ← zolpidem · direct sigmoid Emax (Hill) effect | — | de Haas SL et al., Pharmacokinetics, pharmacodynamics and…, Journal of psychopharmacolo… (2010) | [10.1177/0269881109106898](https://doi.org/10.1177/0269881109106898) |
| <span class="pk-badge pk-badge--green">extracted</span> | [de_2010_EEG_alpha_power_2](drugs/drug_zolpidem/pd_de_2010_EEG_alpha_power_2.md) | EEG alpha power ← zolpidem · inhibition effect | — | de Haas SL et al., Pharmacokinetics, pharmacodynamics and…, Journal of psychopharmacolo… (2010) | [10.1177/0269881109106898](https://doi.org/10.1177/0269881109106898) |
| <span class="pk-badge pk-badge--green">extracted</span> | [de_2010_EEG_beta_power](drugs/drug_zolpidem/pd_de_2010_EEG_beta_power.md) | EEG beta power ← zolpidem · direct sigmoid Emax (Hill) effect | — | de Haas SL et al., Pharmacokinetics, pharmacodynamics and…, Journal of psychopharmacolo… (2010) | [10.1177/0269881109106898](https://doi.org/10.1177/0269881109106898) |
| <span class="pk-badge pk-badge--green">extracted</span> | [de_2010_SPV](drugs/drug_zolpidem/pd_de_2010_SPV.md) | saccadic peak velocity ← zolpidem · direct sigmoid Emax (Hill) effect | — | de Haas SL et al., Pharmacokinetics, pharmacodynamics and…, Journal of psychopharmacolo… (2010) | [10.1177/0269881109106898](https://doi.org/10.1177/0269881109106898) |
| <span class="pk-badge pk-badge--green">extracted</span> | [de_2010_SPV_2](drugs/drug_zolpidem/pd_de_2010_SPV_2.md) | saccadic peak velocity ← zolpidem · inhibition effect | — | de Haas SL et al., Pharmacokinetics, pharmacodynamics and…, Journal of psychopharmacolo… (2010) | [10.1177/0269881109106898](https://doi.org/10.1177/0269881109106898) |
| <span class="pk-badge pk-badge--green">extracted</span> | [de_2010_VAS](drugs/drug_zolpidem/pd_de_2010_VAS.md) | VAS alertness score ← zolpidem · direct sigmoid Emax (Hill) effect | — | de Haas SL et al., Pharmacokinetics, pharmacodynamics and…, Journal of psychopharmacolo… (2010) | [10.1177/0269881109106898](https://doi.org/10.1177/0269881109106898) |
| <span class="pk-badge pk-badge--green">extracted</span> | [de_2010_VAS_2](drugs/drug_zolpidem/pd_de_2010_VAS_2.md) | VAS 'feeling high' ← zolpidem · direct sigmoid Emax (Hill) effect | — | de Haas SL et al., Pharmacokinetics, pharmacodynamics and…, Journal of psychopharmacolo… (2010) | [10.1177/0269881109106898](https://doi.org/10.1177/0269881109106898) |
| <span class="pk-badge pk-badge--green">extracted</span> | [de_2010_adaptive_tracking_performance](drugs/drug_zolpidem/pd_de_2010_adaptive_tracking_performance.md) | adaptive tracking performance ← zolpidem · direct sigmoid Emax (Hill) effect | — | de Haas SL et al., Pharmacokinetics, pharmacodynamics and…, Journal of psychopharmacolo… (2010) | [10.1177/0269881109106898](https://doi.org/10.1177/0269881109106898) |
| <span class="pk-badge pk-badge--green">extracted</span> | [de_2010_adaptive_tracking_performance_2](drugs/drug_zolpidem/pd_de_2010_adaptive_tracking_performance_2.md) | adaptive tracking performance ← zolpidem · inhibition effect | — | de Haas SL et al., Pharmacokinetics, pharmacodynamics and…, Journal of psychopharmacolo… (2010) | [10.1177/0269881109106898](https://doi.org/10.1177/0269881109106898) |
| <span class="pk-badge pk-badge--green">extracted</span> | [de_2010_body_sway](drugs/drug_zolpidem/pd_de_2010_body_sway.md) | body sway ← zolpidem · direct sigmoid Emax (Hill) effect | — | de Haas SL et al., Pharmacokinetics, pharmacodynamics and…, Journal of psychopharmacolo… (2010) | [10.1177/0269881109106898](https://doi.org/10.1177/0269881109106898) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Perrais_1999_mIPSC_duration](drugs/drug_zolpidem/pd_Perrais_1999_mIPSC_duration.md) | mIPSC duration (relative to control) ← zolpidem · direct sigmoid Emax (Hill) effect | model (no simulator) | Perrais D et al., Effect of zolpidem on miniature IPSCs a…, The Journal of neuroscience… (1999) | [10.1523/JNEUROSCI.19-02-00578.1999](https://doi.org/10.1523/JNEUROSCI.19-02-00578.1999) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zolpidem) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (target), GABRA2 (target), GABRA3 (target), GABRG2 (target), GABRG3 (allosteric modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 61 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 4  ·  extracted 3  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Stockmann_2014.pdf` | Stockmann C et al., Preliminary assessment of zolpidem phar…, Therapeutic drug monitoring (2014) | popPK | 10 | [10.1097/FTD.0000000000000017](https://doi.org/10.1097/FTD.0000000000000017) | [24365985](https://pubmed.ncbi.nlm.nih.gov/24365985) | Population PK model of zolpidem in pediatric burn patients with CL and Vc values reported directly in the abstract. |
| `Drover_2000.pdf` | Drover D et al., Pharmacokinetics, pharmacodynamics, and…, Clinical therapeutics (2000) | popPK | 7 | [10.1016/s0149-2918(00)83043-x](https://doi.org/10.1016/s0149-2918(00)83043-x) | [11192136](https://pubmed.ncbi.nlm.nih.gov/11192136) | Human population PK (NONMEM) of zolpidem was performed, but the evidence only shows the half-life (124.5±37.9 min); other parameter values (CL, V, ka) are not included in the provided text. |
| `Vlase_2011.pdf` | Vlase L et al., Pharmacokinetic interaction between zol…, European journal of drug me… (2011) | popPK | 7 | [10.1007/s13318-010-0014-9](https://doi.org/10.1007/s13318-010-0014-9) | [21302033](https://pubmed.ncbi.nlm.nih.gov/21302033) | Human NCA study reporting numeric zolpidem PK parameters (Cmax, tmax, AUC, half-life) directly in the abstract, though no CL/V values. |
| `Vlase_2012.pdf` | Vlase L et al., Effect of fluvoxamine on the pharmokine…, Clinical and experimental p… (2012) | popPK | 7 | [10.1111/j.1440-1681.2011.05625.x](https://doi.org/10.1111/j.1440-1681.2011.05625.x) | [21985609](https://pubmed.ncbi.nlm.nih.gov/21985609) | Human NCA study of zolpidem with numeric Cmax, tmax, AUC, and half-life reported in the abstract, though no CL/V values are given. |
| `Weinling_2006.pdf` | Weinling E et al., Pharmacokinetic profile of a new modifi…, Fundamental & clinical phar… (2006) | popPK | 7 | [10.1111/j.1472-8206.2006.00415.x](https://doi.org/10.1111/j.1472-8206.2006.00415.x) | [16867025](https://pubmed.ncbi.nlm.nih.gov/16867025) | Human PK study of zolpidem with NCA parameters, but the evidence shows only ratios (Cmax 0.82, HVD) and no full CL/V/t½ numeric values, which may be in tables not provided. |
| `de_2010.pdf` | de Haas SL et al., Pharmacokinetics, pharmacodynamics and…, Journal of psychopharmacolo… (2010) | popPK | 6 | [10.1177/0269881109106898](https://doi.org/10.1177/0269881109106898) | [19648220](https://pubmed.ncbi.nlm.nih.gov/19648220) | Human PK study of zolpidem with t½ and Tmax reported, but full population-PK parameters (CL, V) are not shown in the evidence. |
| `Tuk_2002.pdf` | Tuk B et al., Mechanism-based pharmacodynamic modelin…, Journal of pharmacokinetics… (2002) | popPK | 5 | [10.1023/a:1020202806759](https://doi.org/10.1023/a:1020202806759) | [12449497](https://pubmed.ncbi.nlm.nih.gov/12449497) | Rat PK-PD study of zolpidem, but evidence contains only PD parameters (EC50, Emax); PK disposition values are not shown and likely live in figures/supplements. |

<sub>queue written 2026-10-06T23:10:28.843436+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Drover_2000 | relevant | 7 | 4 | Human population PK (NONMEM) of zolpidem was performed, but the evidence only shows the half-life (124.5±37.9 min); other parameter values (CL, V, ka) are not included in the provided text. |
| popPK | Feigenspan_2004 | irrelevant | 0 | 0 | In-vitro electrophysiology of GABAA receptors where zolpidem is only a pharmacological modulator; no PK parameters for zolpidem. |
| popPK | Hoever_2010 | irrelevant | 2 | 1 | Zolpidem is only a comparator/diagnostic agent in an almorexant PK study; no zolpidem disposition parameters are reported. |
| popPK | Lalovic_2023 | irrelevant | 0 | 0 | Zolpidem is only a comparator arm in lemborexant exposure-response analyses; no zolpidem PK parameters are reported. |
| popPK | Myers_2012 | irrelevant | 2 | 3 | This is a PET receptor-occupancy study of [11C]Ro15-4513/[11C]flumazenil binding; zolpidem is only a blocking drug, and no zolpidem disposition PK parameters (CL, V, ka, half-life) are reported — only plasma levels and ligand binding rate constants. |
| popPK | Niespodziany_2020 | irrelevant | 0 | 0 | In vitro electrophysiology study of padsevonil at GABA-A receptors; zolpidem is only a reference agonist, no PK parameters. |
| popPK | Perrais_1999 | irrelevant | 0 | 0 | This is an electrophysiology study of zolpidem's effect on GABA_A receptor currents in rat brain slices, not a pharmacokinetic study; no CL, V, ka, or PK model parameters are reported. |
| popPK | Schönrock_1993 | irrelevant | 0 | 0 | In-vitro electrophysiology study of GABAA receptors in rat hippocampal neurons; zolpidem is only a pharmacological tool with no PK parameters. |
| popPK | Tuk_2002 | relevant | 5 | 2 | Rat PK-PD study of zolpidem, but evidence contains only PD parameters (EC50, Emax); PK disposition values are not shown and likely live in figures/supplements. |
| popPK | Ufer_2022 | irrelevant | 0 | 0 | Zolpidem is only an active comparator in an abuse-potential study; no PK disposition parameters for zolpidem are reported. |
| popPK | Weinling_2006 | relevant | 7 | 4 | Human PK study of zolpidem with NCA parameters, but the evidence shows only ratios (Cmax 0.82, HVD) and no full CL/V/t½ numeric values, which may be in tables not provided. |
| popPK | de_2010 | relevant | 6 | 4 | Human PK study of zolpidem with t½ and Tmax reported, but full population-PK parameters (CL, V) are not shown in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:10 UTC</sub>
