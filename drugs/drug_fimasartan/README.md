<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;fimasartan&quot;}]"></div>

# fimasartan

- **generic name:** fimasartan
- **ATC codes:** `C09CA10`, `C09DA10`, `C09DB09`, `C10BX16`
- **DrugBank:** [DB09279](https://go.drugbank.com/drugs/DB09279) · **PubChem:** [CID 9870652](https://pubchem.ncbi.nlm.nih.gov/compound/9870652)
- **molar mass:** 501.65 g/mol (C27H31N7OS) — DrugBank
- **groups:** investigational

## About

Fimasartan is an angiotensin II receptor blocker developed for the treatment of high blood pressure (essential hypertension). It is considered investigational in major drug databases and is not authorised in the European Union; it is used mainly in a few Asian countries such as South Korea.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q8563179](https://www.wikidata.org/wiki/Q8563179) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fimasartan | parent | 501.65 | C27H31N7OS | DrugBank | [9870652](https://pubchem.ncbi.nlm.nih.gov/compound/9870652) | Kim_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:46 | 10:44 | 0/2/0 | 1/0/1 | 0/0/0 | 131,087/31,026 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.357). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.30).">human + animal</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Kim_2015_reference](drugs/drug_fimasartan/Fimasartan_Kim2015_reference.md) | — | 1-compartment (no model) | 0 (+2 cov.) | Kim TH et al., Population Pharmacokinetic Modeling of…, The AAPS journal (2015) | [10.1208/s12248-015-9764-2](https://doi.org/10.1208/s12248-015-9764-2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.6). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lee_2013_2_reference](drugs/drug_fimasartan/Fimasartan_Lee2013v2_reference.md) | — | 1-compartment (no model) | 0 | Lee H et al., A Population Pharmacokinetic Analysis o…, Clinical pharmacology in dr… (2013) | [10.1002/cpdd.10](https://doi.org/10.1002/cpdd.10) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kim_2017_BP](drugs/drug_fimasartan/pd_Kim_2017_BP.md) | blood pressure ← fimasartan · indirect response — drug inhibits the production of blood pressure | — | Kim CO et al., Decreased potency of fimasartan in live…, Translational and clinical… (2017) | [10.12793/tcp.2017.25.1.43](https://doi.org/10.12793/tcp.2017.25.1.43) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Bulitta_2017_DBP](drugs/drug_fimasartan/pd_Bulitta_2017_DBP.md) | diastolic blood pressure ← fimasartan · indirect response — drug inhibits the production of diastolic blood pressure | — | Bulitta JB et al., Characterizing the time-course of antih…, European journal of pharmac… (2017) | [10.1016/j.ejps.2017.06.008](https://doi.org/10.1016/j.ejps.2017.06.008) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Bulitta_2017_SBP](drugs/drug_fimasartan/pd_Bulitta_2017_SBP.md) | systolic blood pressure ← fimasartan · indirect response — drug inhibits the production of systolic blood pressure | — | Bulitta JB et al., Characterizing the time-course of antih…, European journal of pharmac… (2017) | [10.1016/j.ejps.2017.06.008](https://doi.org/10.1016/j.ejps.2017.06.008) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fimasartan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `SLCO1B1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AGTR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bulitta_2017.pdf` | Bulitta JB et al., Characterizing the time-course of antih…, European journal of pharmac… (2017) | popPK | 10 | [10.1016/j.ejps.2017.06.008](https://doi.org/10.1016/j.ejps.2017.06.008) | [28599987](https://pubmed.ncbi.nlm.nih.gov/28599987) | The paper describes a population PK/PD model for fimasartan, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Lee_2013.pdf` | Lee J et al., Pharmacokinetic-pharmacodynamic model o…, European journal of clinica… (2013) | popPK | 10 | [10.1007/s00228-012-1297-3](https://doi.org/10.1007/s00228-012-1297-3) | [22660441](https://pubmed.ncbi.nlm.nih.gov/22660441) | The paper describes a population PK-PD study of fimasartan in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Lee_2013_2.pdf` | Lee H et al., A Population Pharmacokinetic Analysis o…, Clinical pharmacology in dr… (2013) | popPK | 10 | [10.1002/cpdd.10](https://doi.org/10.1002/cpdd.10) | [27121670](https://pubmed.ncbi.nlm.nih.gov/27121670) | The abstract provides specific quantitative population PK parameters (clearance, variability) for fimasartan in humans. |
| `Kim_2014_2.pdf` | Kim S et al., Effect of renal function on the pharmac…, Drug design, development an… (2014) | popPK | 9 | [10.2147/DDDT.S68784](https://doi.org/10.2147/DDDT.S68784) | [25336916](https://pubmed.ncbi.nlm.nih.gov/25336916) | The study reports PK parameters for fimasartan in humans, but the specific numeric values for clearance, volume, or half-life are not present in the provided text, only geometric mean ratios and relative bioavailability percentages. |
| `Kim_2017.pdf` | Kim CO et al., Decreased potency of fimasartan in live…, Translational and clinical… (2017) | popPK | 9 | [10.12793/tcp.2017.25.1.43](https://doi.org/10.12793/tcp.2017.25.1.43) | [32095458](https://pubmed.ncbi.nlm.nih.gov/32095458) | The paper describes a population PK-PD model for fimasartan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Jeong_2015.pdf` | Jeong ES et al., Glucuronidation of fimasartan, a new an…, Xenobiotica; the fate of fo… (2015) | pgx | 7 | [10.3109/00498254.2014.942810](https://doi.org/10.3109/00498254.2014.942810) | [25034008](https://www.ncbi.nlm.nih.gov/pubmed/25034008) | metadata signals extractable PGX data (UGT1A3, PK/PD-context) |

<sub>queue written 2026-10-07T07:36:32.530903+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Angeli_2018 | irrelevant | 2 | 1 | This is a review article that summarizes clinical trial data and mentions bioavailability but does not report original quantitative compartmental PK parameters (CL, V, Q, ka) or a population PK model. |
| PD | Angeli_2018 | not_relevant | 2 | 0 | This review qualitatively mentions blood-pressure reduction and effective doses, but reports no extractable exposure- or dose-response relationship or numeric PD parameters. |
| popPK | Bulitta_2017 | relevant | 10 | 0 | The paper describes a population PK/PD model for fimasartan, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Choi_2018 | not_relevant | 0 | 0 | The study characterizes CYP enzymes involved in fimasartan metabolism using recombinant proteins in vitro, but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Jeong_2015 | not_relevant | 0 | 0 | The paper characterizes the enzyme (UGT1A3) responsible for fimasartan glucuronidation but does not report any pharmacogenomic effects of genetic variants on PK or PD parameters. |
| popPK | Kim_2014_2 | relevant | 9 | 2 | The study reports PK parameters for fimasartan in humans, but the specific numeric values for clearance, volume, or half-life are not present in the provided text, only geometric mean ratios and relative bioavailability percentages. |
| popPK | Kim_2017 | relevant | 9 | 0 | The paper describes a population PK-PD model for fimasartan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Lee_2013 | relevant | 10 | 0 | The paper describes a population PK-PD study of fimasartan in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| PD | Lee_2013 | not_relevant | 8 | 0 | A formal population turnover PK-PD model is described, but the text provides no numeric PD parameter estimates or effect-versus-concentration data to extract. |
| PGx | Ryu_2024 | not_relevant | 0 | 0 | The paper investigates the effect of perillyl alcohol on CYP3A4 activity using fimasartan as a substrate, but does not report any pharmacogenomic effects (gene variants/genotypes) on fimasartan's PK or PD parameters. |
| PGx | Storelli_2024 | not_relevant | 0 | 0 | The paper focuses on the impact of hepatic impairment (physiological changes) on fimasartan PK, not on the effect of specific gene variants or genotypes. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:36 UTC</sub>
