<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;diamorphine&quot;}]"></div>

# diamorphine

- **generic name:** diamorphine
- **ATC codes:** `N07BC06`
- **DrugBank:** [DB01452](https://go.drugbank.com/drugs/DB01452) · **PubChem:** [CID 5462328](https://pubchem.ncbi.nlm.nih.gov/compound/5462328)
- **molar mass:** 369.411 g/mol (C21H23NO5) — DrugBank
- **groups:** approved, illicit

## About

Diamorphine (heroin) is an opioid that has been used medically for pain relief and in the treatment of opioid dependence, and is also widely used as a recreational drug for its euphoric effects. It is classified as an illegal drug in most places, though it remains approved for limited medical use in some countries, mainly in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q60168](https://www.wikidata.org/wiki/Q60168) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| diamorphine | parent | 369.411 | C21H23NO5 | DrugBank | [5462328](https://pubchem.ncbi.nlm.nih.gov/compound/5462328) | Cai_2025 |
| 6-acetylmorphine | metabolite | 327.38 | C19H21NO4 | PubChem | [5462507](https://pubchem.ncbi.nlm.nih.gov/compound/5462507) | Rook_2006 |
| 6-monoacetylmorphine | metabolite | 327.4 | — | the paper | — | Cai_2025 |
| morphine | metabolite | 285.34 | — | the paper | — | Cai_2025, Rook_2006 |
| morphine-3-glucuronide | metabolite | 461.467 | C23H27NO9 | PubChem | [5484731](https://pubchem.ncbi.nlm.nih.gov/compound/5484731) | Rook_2006 |
| morphine-6-glucuronide | metabolite | 461.467 | C23H27NO9 | PubChem | [5360621](https://pubchem.ncbi.nlm.nih.gov/compound/5360621) | Rook_2006 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:59 | 3:41 | 0/3/0 | 1/3/0 | 0/0/0 | 204,668/18,525 | ollama / glm-5.3-flash | 9 | 1/8 | 8/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Cai_2025_fisher_information_matrix_estimates_stochastic_approximation](drugs/drug_diamorphine/Diamorphine_Cai2025_fisher_information_matrix_estimates_stoc.md) | — | general linear (no model) | 9 | Cai L et al., Intranasal diamorphine population pharm…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13186](https://doi.org/10.1002/psp4.13186) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Cai_2025_population_value_estimation_mode](drugs/drug_diamorphine/Diamorphine_Cai2025_population_value_estimation_mode.md) | — | general linear (no model) | 0 | Cai L et al., Intranasal diamorphine population pharm…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13186](https://doi.org/10.1002/psp4.13186) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Rook_2006_reference](drugs/drug_diamorphine/Diamorphine_Rook2006_reference.md) | — | general linear (no model) | 4 | Rook EJ et al., Population pharmacokinetics of heroin a…, Clinical pharmacokinetics (2006) | [10.2165/00003088-200645040-00005](https://doi.org/10.2165/00003088-200645040-00005) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Prottengeier_2014_p24](drugs/drug_diamorphine/pd_Prottengeier_2014_p24.md) | HIV reactivation (p24-positive cells) ← heroin · direct sigmoid Emax (Hill) effect | — | Prottengeier J et al., The effects of opioids on HIV reactivat…, AIDS research and therapy (2014) | [10.1186/1742-6405-11-17](https://doi.org/10.1186/1742-6405-11-17) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Prottengeier_2014_p24_2](drugs/drug_diamorphine/pd_Prottengeier_2014_p24_2.md) | HIV reactivation (p24-positive cells) ← morphine · direct sigmoid Emax (Hill) effect | — | Prottengeier J et al., The effects of opioids on HIV reactivat…, AIDS research and therapy (2014) | [10.1186/1742-6405-11-17](https://doi.org/10.1186/1742-6405-11-17) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Liu_2003_cAMP](drugs/drug_diamorphine/pd_Liu_2003_cAMP.md) | naloxone-precipitated cAMP overshoot ← heroin · model not identified | — | Liu ZH et al., Binding affinity to and dependence on s…, Acta pharmacologica Sinica (2003) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [McLeod_2005_VAS](drugs/drug_diamorphine/pd_McLeod_2005_VAS.md) | Effective analgesia (VAS ≤10 mm within 30 min of epidural injection) ← diamorphine · inhibition effect | — | McLeod GA et al., Is the clinical efficacy of epidural di…, British journal of anaesthe… (2005) | [10.1093/bja/aei029](https://doi.org/10.1093/bja/aei029) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zünkler_2010_hERG](drugs/drug_diamorphine/pd_Z_nkler_2010_hERG.md) | hERG current inhibition ← heroin · direct sigmoid Emax (Hill) effect | — | Zünkler BJ et al., Comparison of the effects of methadone…, Cardiovascular toxicology (2010) | [10.1007/s12012-010-9074-y](https://doi.org/10.1007/s12012-010-9074-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=diamorphine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CES1` unknown | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRK1 (target), OPRM1 (target), SERPINA7 (inducer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 19 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rook_2006.pdf` | Rook EJ et al., Population pharmacokinetics of heroin a…, Clinical pharmacokinetics (2006) | popPK | 10 | [10.2165/00003088-200645040-00005](https://doi.org/10.2165/00003088-200645040-00005) | [16584286](https://pubmed.ncbi.nlm.nih.gov/16584286) | Population PK model of diamorphine (heroin) and metabolites in humans with numeric parameters (bioavailability, half-lives, clearances) in the abstract, though full parameter tables may be in the paper body. |
| `Perger_2009.pdf` | Perger L et al., Oral heroin in opioid-dependent patient…, European journal of pharmac… (2009) | popPK | 6 | [10.1016/j.ejps.2008.11.008](https://doi.org/10.1016/j.ejps.2008.11.008) | [19084595](https://pubmed.ncbi.nlm.nih.gov/19084595) | Human PK study of diamorphine reporting absorption/bioavailability of its metabolite morphine (bioavailability 56-61%, relative BA 86%/93%, Tmax), but no CL/V/compartmental parameters and full NCA values likely in tables not shown. |

<sub>queue written 2026-10-07T02:56:27.964717+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Antonilli_2008 | irrelevant | 1 | 1 | In-vitro microsomal enzyme kinetics of estradiol glucuronidation in heroin-treated rats; no diamorphine disposition parameters reported. |
| popPK | Castillo_2023 | irrelevant | 1 | 0 | Heroin is only a challenge dose; the PK focus is naltrexone plasma levels, with no diamorphine disposition parameters reported. |
| popPK | Cole_2022 | irrelevant | 0 | 0 | This is an epidemiological mathematical model of opioid use disorder dynamics, not a pharmacokinetic study; no diamorphine PK parameters (CL, V, ka, etc.) are reported. |
| popPK | Galaj_2022 | irrelevant | 0 | 0 | Diamorphine (heroin) is only a behavioral probe in rats; PK parameters reported are for ABS01-113, not diamorphine, and values are in figures/supplementary material. |
| popPK | Ge_2025 | irrelevant | 0 | 0 | This is a deep brain stimulation study for heroin addiction with no pharmacokinetic parameters for diamorphine reported. |
| popPK | Gómez-Núñez_2023 | irrelevant | 0 | 0 | This is a behavioral epidemiology meta-analysis of drug use before/during sex; no PK parameters for diamorphine are reported. |
| popPK | Liu_2003 | irrelevant | 0 | 0 | In-vitro receptor binding/dependence study with Ki values, not a PK study reporting disposition parameters for diamorphine. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | TMS-EEG study of cortical plasticity in heroin/methamphetamine use disorder; no pharmacokinetic parameters for diamorphine are reported. |
| popPK | McLeod_2005 | irrelevant | 2 | 0 | This is a clinical efficacy (EC50 dose-response) study, not a PK study reporting disposition parameters like CL, V, or half-life. |
| popPK | Meana_2000 | irrelevant | 0 | 0 | This is a postmortem receptor/G-protein binding study in human brain; no diamorphine pharmacokinetic parameters (CL, V, ka, half-life, PK model) are reported. |
| popPK | Nasser_2014 | irrelevant | 0 | 0 | This is a population PK study of buprenorphine (RBP-6000), not diamorphine; diamorphine is not the subject drug. |
| popPK | Prottengeier_2014 | irrelevant | 0 | 0 | In vitro HIV reactivation study with heroin/morphine; no PK disposition parameters (CL, V, ka, half-life) reported, only EC50 and cited plasma concentrations. |
| popPK | Shahid_2016 | irrelevant | 0 | 0 | Toxicology study of heroin/morphine hepatotoxicity in rats with no PK parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Spence_2025 | irrelevant | 0 | 0 | A scoping review of disease-spread models of opioid misuse with no pharmacokinetic parameters for diamorphine. |
| popPK | Zandvliet_2005 | irrelevant | 0 | 0 | Diamorphine is only the co-administered drug; the PK model and parameters concern caffeine and its metabolites, not diamorphine. |
| popPK | Zünkler_2010 | irrelevant | 0 | 0 | In-vitro hERG patch-clamp study reporting IC50 values, not pharmacokinetic disposition parameters for diamorphine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:56 UTC</sub>
