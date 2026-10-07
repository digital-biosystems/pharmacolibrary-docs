<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;daclatasvir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daclatasvir_AlNahari2020_reference&quot;,&quot;label&quot;:&quot;Al-Nahari_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daclatasvir/Daclatasvir_AlNahari2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# daclatasvir

- **generic name:** daclatasvir
- **ATC codes:** `J05AP07`
- **DrugBank:** [DB09102](https://go.drugbank.com/drugs/DB09102) · **PubChem:** [CID 25154714](https://pubchem.ncbi.nlm.nih.gov/compound/25154714)
- **molar mass:** 738.89 g/mol (C40H50N8O6) — DrugBank
- **groups:** approved, withdrawn

## About

Daclatasvir is an antiviral drug used to treat chronic hepatitis C, including in patients with liver cirrhosis. It was authorised in the European Union but that authorisation has expired, so it is no longer marketed there, though it has been included in the WHO essential medicines list.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5207712](https://www.wikidata.org/wiki/Q5207712) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| daclatasvir | parent | 738.89 | C40H50N8O6 | DrugBank | [25154714](https://pubchem.ncbi.nlm.nih.gov/compound/25154714) | Al-Nahari_2020, Osawa_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:00 | 4:21 | 1/1/1 | 1/0/2 | 0/0/0 | 237,797/14,704 | einfracz / qwen3.8-27b | 10 | 3/7 | 9/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Al-Nahari_2020_reference](drugs/drug_daclatasvir/Daclatasvir_AlNahari2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Al-Nahari MM et al., Pharmacokinetics of daclatasvir in Egyp…, Antiviral therapy (2020) | [10.3851/IMP3357](https://doi.org/10.3851/IMP3357) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Osawa_2018_reference](drugs/drug_daclatasvir/Daclatasvir_Osawa2018_reference.md) | — | 1-compartment (no model) | 3 | Osawa M et al., Population Pharmacokinetic Analysis for…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1274](https://doi.org/10.1002/jcph.1274) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Cressey_2021_reference](drugs/drug_daclatasvir/Daclatasvir_Cressey2021_reference.md) | — | 1-compartment (no model) | 0 | Cressey TR et al., Effective and Safe Daclatasvir Drug Exp…, The Pediatric infectious di… (2021) | [10.1097/INF.0000000000003282](https://doi.org/10.1097/INF.0000000000003282) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wang_2015_EC50](drugs/drug_daclatasvir/pd_Wang_2015_EC50.md) | HCV replication / viral RNA ← daclatasvir · direct sigmoid Emax (Hill) effect | — | Wang NY et al., Discovery of imidazo[2,1-b]thiazole HCV…, Journal of medicinal chemis… (2015) | [10.1021/jm501934n](https://doi.org/10.1021/jm501934n) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Ueno_2018_SVR12](drugs/drug_daclatasvir/pd_Ueno_2018_SVR12.md) | sustained virologic response at 12 weeks after treatment ← daclatasvir · categorical (graded) response model | — | Ueno T et al., Exposure-Response (Efficacy) Analysis o…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1262](https://doi.org/10.1002/jcph.1262) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Ueno_2019_SVR12](drugs/drug_daclatasvir/pd_Ueno_2019_SVR12.md) | sustained virologic response at posttreatment week 12 ← daclatasvir · categorical (graded) response model | — | Ueno T et al., Exposure-Response Analysis for Efficacy…, Clinical pharmacology in dr… (2019) | [10.1002/cpdd.646](https://doi.org/10.1002/cpdd.646) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=daclatasvir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CYP3A43 (substrate), Genome polyprotein (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 19 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Al-Nahari_2020.pdf` | Al-Nahari MM et al., Pharmacokinetics of daclatasvir in Egyp…, Antiviral therapy (2020) | popPK | 10 | [10.3851/IMP3357](https://doi.org/10.3851/IMP3357) | [32367815](https://pubmed.ncbi.nlm.nih.gov/32367815) | The paper reports quantitative NCA and PopPK parameters (CL/F, V/F, T1/2, absorption rate) for daclatasvir in adolescents, with specific values listed in the abstract. |
| `Osawa_2019.pdf` | Osawa M et al., Population Pharmacokinetic Analysis of…, Clinical pharmacology in dr… (2019) | popPK | 10 | [10.1002/cpdd.649](https://doi.org/10.1002/cpdd.649) | [30629858](https://pubmed.ncbi.nlm.nih.gov/30629858) | The paper describes a population PK analysis for daclatasvir in humans, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract evidence. |
| `Cressey_2021.pdf` | Cressey TR et al., Effective and Safe Daclatasvir Drug Exp…, The Pediatric infectious di… (2021) | popPK | 8 | [10.1097/INF.0000000000003282](https://doi.org/10.1097/INF.0000000000003282) | [34321444](https://pubmed.ncbi.nlm.nih.gov/34321444) | The paper reports quantitative PK summary statistics (AUC, Cmax, Cmin) and describes a population PK model for daclatasvir in humans, although specific model parameters (CL, V) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-07T12:57:24.566355+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chan_2017 | irrelevant | 0 | 0 | The provided evidence consists entirely of unreadable placeholder characters and contains no text, data, or context regarding daclatasvir pharmacokinetics. |
| popPK | Gao_2013 | irrelevant | 0 | 0 | The paper focuses on antiviral activity, mechanism of action, and resistance of HCV NS5A inhibitors, with no report of pharmacokinetic disposition parameters for daclatasvir. |
| popPK | McPhee_2012 | irrelevant | 0 | 0 | The paper focuses on the preclinical profile of asunaprevir, with daclatasvir mentioned only as a co-administered comparator agent, and no PK parameters for daclatasvir are reported. |
| popPK | Nasr_2022 | irrelevant | 0 | 0 | The paper is an in-vitro medicinal chemistry study focusing on the synthesis of HCV NS5B inhibitors, and daclatasvir is only mentioned as a reference compound, not as the subject of any pharmacokinetic analysis. |
| popPK | Osawa_2019 | relevant | 10 | 0 | The paper describes a population PK analysis for daclatasvir in humans, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract evidence. |
| popPK | Smolders_2017 | irrelevant | 2 | 4 | The study focuses on metformin pharmacokinetics; daclatasvir is a co-administered inhibitor with only sparse non-compartmental parameters (AUC, Cmax) reported, lacking a population model or detailed clearance/volume parameters. |
| popPK | Ueno_2019 | irrelevant | 1 | 0 | The paper is an exposure-response (efficacy) analysis that models SVR12 rates as a function of exposure, but it does not report quantitative pharmacokinetic parameters (such as clearance, volume, or half-life) for daclatasvir. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The paper focuses on the discovery and in-vitro synergy of HCV NS4B inhibitors, with no pharmacokinetic data for daclatasvir. |
| popPK | Wisløff_2018 | irrelevant | 0 | 0 | The paper is a health economic evaluation and cost-effectiveness analysis that models drug efficacy and costs, but it does not contain any pharmacokinetic data or disposition parameters for daclatasvir. |
| popPK | Zappulo_2020 | irrelevant | 1 | 0 | This is a narrative review of efficacy and safety with no specific quantitative population PK parameter values (CL, V, etc.) for daclatasvir provided in the evidence. |
| popPK | Zhu_2018 | irrelevant | 1 | 0 | The study models the pharmacokinetics of asunaprevir, not daclatasvir, which is only mentioned as a co-administered drug in the regimen. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:57 UTC</sub>
