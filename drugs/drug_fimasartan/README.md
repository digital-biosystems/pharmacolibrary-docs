<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;fimasartan&quot;}]"></div>

# fimasartan

- **generic name:** fimasartan
- **ATC codes:** `C09CA10`, `C09DA10`, `C09DB09`, `C10BX16`
- **DrugBank:** [DB09279](https://go.drugbank.com/drugs/DB09279) · **PubChem:** [CID 9870652](https://pubchem.ncbi.nlm.nih.gov/compound/9870652)
- **molar mass:** 501.65 g/mol (C27H31N7OS) — DrugBank
- **groups:** investigational

## About

**Description.** Fimasartan is an angiotensin II receptor antagonist (ARB) drug employed in the treatment of both hypertension and heart failure. It has been found to be safe when administered with hydrochlorothiazide (a diuretic) in clinical trials. Fimasartan was initially approved September 9th, 2010 in South Korea and is marketed under the brand name _Kanarb_ by Boryung Pharmaceuticals.

**Indication.** Used for the treatment of hypertension and heart failure [A20319].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 17:00 | 6:19 | 0/1/0 | 0/0/0 | 0/0/0 | 31,976/13,797 | openai / gpt-6-luna | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lee_2013_2_reference](drugs/drug_fimasartan/Fimasartan_Lee2013v2_reference.md) | — | 1-compartment (no model) | 0 | Lee H et al., A Population Pharmacokinetic Analysis o…, Clinical pharmacology in dr… (2013) | [10.1002/cpdd.10](https://doi.org/10.1002/cpdd.10) |

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
| excretion | bile duct | <sub>“…Most is eliminated unchangd in bile…”</sub> | prose |
| excretion | kidney | <sub>“…less than 3% in the urine…”</sub> | prose |

<sub>Actors without a tissue in the table: AGTR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lee_2013.pdf` | Lee J et al., Pharmacokinetic-pharmacodynamic model o…, European journal of clinica… (2013) | popPK | 10 | [10.1007/s00228-012-1297-3](https://doi.org/10.1007/s00228-012-1297-3) | [22660441](https://pubmed.ncbi.nlm.nih.gov/22660441) | The paper reports a fimasartan population PK model, but numeric disposition parameter estimates are absent from the provided evidence. |
| `Lee_2013_2.pdf` | Lee H et al., A Population Pharmacokinetic Analysis o…, Clinical pharmacology in dr… (2013) | popPK | 10 | [10.1002/cpdd.10](https://doi.org/10.1002/cpdd.10) | [27121670](https://pubmed.ncbi.nlm.nih.gov/27121670) | The evidence reports a fimasartan population-PK model and numeric clearance and variability values. |
| `Bulitta_2017.pdf` | Bulitta JB et al., Characterizing the time-course of antih…, European journal of pharmac… (2017) | popPK | 9 | [10.1016/j.ejps.2017.06.008](https://doi.org/10.1016/j.ejps.2017.06.008) | [28599987](https://pubmed.ncbi.nlm.nih.gov/28599987) | The study uses a population PK/PD model for fimasartan, but no numeric disposition parameters are included in the provided evidence. |
| `Kim_2017.pdf` | Kim CO et al., Decreased potency of fimasartan in live…, Translational and clinical… (2017) | popPK | 9 | [10.12793/tcp.2017.25.1.43](https://doi.org/10.12793/tcp.2017.25.1.43) | [32095458](https://pubmed.ncbi.nlm.nih.gov/32095458) | Fimasartan is modeled as the subject drug, but no numeric PK parameter values are provided in the evidence. |
| `Kim_2014_2.pdf` | Kim S et al., Effect of renal function on the pharmac…, Drug design, development an… (2014) | popPK | 8 | [10.2147/DDDT.S68784](https://doi.org/10.2147/DDDT.S68784) | [25336916](https://pubmed.ncbi.nlm.nih.gov/25336916) | Fimasartan is the subject of a population-PK analysis, but the evidence gives only exposure ratios, not numeric disposition parameters. |
| `Jeong_2015.pdf` | Jeong ES et al., Glucuronidation of fimasartan, a new an…, Xenobiotica; the fate of fo… (2015) | pgx | 7 | [10.3109/00498254.2014.942810](https://doi.org/10.3109/00498254.2014.942810) | [25034008](https://www.ncbi.nlm.nih.gov/pubmed/25034008) | metadata signals extractable PGX data (UGT1A3, PK/PD-context) |
| `Storelli_2024.pdf` | Storelli F et al., Toward improved predictions of pharmaco…, CPT: pharmacometrics & syst… (2024) | pgx | 7 | [10.1002/psp4.13062](https://doi.org/10.1002/psp4.13062) | [37833845](https://www.ncbi.nlm.nih.gov/pubmed/37833845) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-09-30T16:58:41.841870+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Angeli_2018 | irrelevant | 1 | 1 | This is a review and gives no quantitative disposition parameters; the reported bioavailability value is not a CL, V, Q, ka, half-life, or PK model. |
| PD | Angeli_2018 | not_relevant | 2 | 0 | This review qualitatively mentions blood-pressure reduction and effective doses, but reports no extractable exposure- or dose-response relationship or numeric PD parameters. |
| popPK | Bulitta_2017 | relevant | 9 | 1 | The study uses a population PK/PD model for fimasartan, but no numeric disposition parameters are included in the provided evidence. |
| PGx | Choi_2018 | not_relevant | 0 | 0 | The study characterizes fimasartan metabolism by CYP enzymes in vitro but does not report effects of genetic variants, genotypes, or phenotypes on a PK or PD parameter. |
| PGx | Jeong_2015 | not_relevant | 0 | 0 | The study characterizes UGT isoform contributions to fimasartan glucuronidation but does not assess genetic variants, genotypes, or phenotypes affecting a PK/PD parameter. |
| popPK | Kim_2014_2 | relevant | 8 | 2 | Fimasartan is the subject of a population-PK analysis, but the evidence gives only exposure ratios, not numeric disposition parameters. |
| popPK | Kim_2015 | relevant | 10 | 3 | The study models fimasartan population PK, but key CL/V estimates appear in omitted Table I; only bioavailability and other summary values are visible. |
| popPK | Kim_2017 | relevant | 9 | 1 | Fimasartan is modeled as the subject drug, but no numeric PK parameter values are provided in the evidence. |
| popPK | Lee_2013 | relevant | 10 | 1 | The paper reports a fimasartan population PK model, but numeric disposition parameter estimates are absent from the provided evidence. |
| PD | Lee_2013 | not_relevant | 8 | 0 | A formal population turnover PK-PD model is described, but the text provides no numeric PD parameter estimates or effect-versus-concentration data to extract. |
| PGx | Ryu_2024 | not_relevant | 0 | 0 | The study reports perillyl alcohol-mediated CYP3A4 activation with fimasartan, not an effect of a gene variant, genotype, or phenotype on a fimasartan PK/PD parameter. |
| PGx | Storelli_2024 | not_relevant | 0 | 0 | The paper concerns hepatic impairment and drug transport, not pharmacogenomic effects of gene variants or phenotypes on fimasartan PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-30 16:58 UTC</sub>
