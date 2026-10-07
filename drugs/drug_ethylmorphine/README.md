<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05D&quot;,&quot;href&quot;:&quot;atc/R05D.md&quot;},{&quot;label&quot;:&quot;ethylmorphine&quot;}]"></div>

# ethylmorphine

- **generic name:** ethylmorphine
- **ATC codes:** `R05DA01`, `S01XA06`
- **DrugBank:** [DB01466](https://go.drugbank.com/drugs/DB01466) · **PubChem:** [CID 5359271](https://pubchem.ncbi.nlm.nih.gov/compound/5359271)
- **molar mass:** 313.3908 g/mol (C19H23NO3) — DrugBank
- **groups:** illicit, investigational

## About

Ethylmorphine is an opioid of the morphinan alkaloid family that has been used as a cough suppressant and in eye preparations. It is classified as investigational and illicit, so it does not appear to be in routine medical use today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q554881](https://www.wikidata.org/wiki/Q554881) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:25 | 3:46 | 0/0/0 | 1/0/0 | 0/0/0 | 64,976/2,637 | einfracz / qwen3.8-27b | 2 | 0/1 | 1/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Mizuta_2012_AP](drugs/drug_ethylmorphine/pd_Mizuta_2012_AP.md) | AP of the Aα/β neuron ← ethylmorphine · direct sigmoid Emax (Hill) effect | — | Mizuta K et al., Inhibition by morphine and its analogs…, Journal of neuroscience res… (2012) | [10.1002/jnr.23059](https://doi.org/10.1002/jnr.23059) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ethylmorphine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `POR` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 52 matched, 51 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aasmundstad_1995 | not_relevant | 6 | 8 | The paper reports an association between CYP2D6 genotypes/phenotypes and ethylmorphine metabolism (urinary recovery of metabolites) but does not provide fitted effect sizes or specific PK parameter estimates (like AUC or CL) stratified by genotype. |
| PGx | Cottrill_2021 | not_relevant | 1 | 2 | The paper provides a pharmacogenomics dataset for 30 patients and general metabolic pathways for ethylmorphine, but it does not measure or report changes in specific PK or PD parameters (e.g., AUC, Cmax, response) of ethylmorphine. |
| PGx | Daniel_2005 | not_relevant | 0 | 0 | The study investigates CYP2D inhibition by neuroleptics using ethylmorphine as a probe substrate, but does not report pharmacogenomic effects (gene variants) on the PK/PD of ethylmorphine itself. |
| PGx | Fritz_2005 | not_relevant | 0 | 0 | The study examines the effect of hypothermia (temperature) on fentanyl pharmacokinetics and CYP3A4 activity, not the effect of a gene variant or genotype. |
| PGx | Helland_2010 | not_relevant | 1 | 2 | The paper is a case report describing a death and mentions the genotype only to confirm normal metabolic capacity, without reporting any quantitative pharmacogenomic effect on PK or PD parameters. |
| popPK | Ho_1996 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of nalbuphine, using ethylmorphine only as an internal standard for the assay. |
| popPK | Hostler_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of midazolam, not ethylmorphine. |
| PGx | Jones_1996 | not_relevant | 0 | 0 | The paper concerns dextromethorphan pharmacogenomics; ethylmorphine is used only as an internal standard. |
| PGx | Kastelova_2002 | not_relevant | 0 | 0 | The paper studies drug-drug inhibition of ethylmorphine metabolism by propranolol in rat microsomes, not the effect of genetic variants on ethylmorphine pharmacokinetics or pharmacodynamics. |
| PGx | Lewis_2000 | not_relevant | 0 | 0 | The study investigates structure-activity relationships for CYP3A induction, not the effect of a gene variant or genotype on ethylmorphine pharmacokinetics. |
| PGx | Monshouwer_1998 | not_relevant | 0 | 0 | The paper characterizes CYP enzymes in pig hepatocytes using ethylmorphine as a marker substrate for enzyme induction, but it does not report a pharmacogenomic effect (gene variant) on a PK/PD parameter. |
| PGx | Moorthy_1997 | not_relevant | 0 | 0 | The paper investigates the effect of CYP inducers on tamoxifen genotoxicity and uses ethylmorphine only as a marker enzyme for CYP2D6 activity, not as the subject drug for pharmacogenomic PK/PD analysis. |
| PGx | Ozdemir_2000 | not_relevant | 2 | 2 | The paper uses ethylmorphine as a probe to estimate the general genetic contribution to CYP3A4 variability, but it does not report specific gene variants or genotypes associated with ethylmorphine PK parameters. |
| PGx | Sen_2000 | not_relevant | 0 | 0 | The paper characterizes fish CYP1A1 and notes it does not metabolize ethylmorphine, but it does not report human pharmacogenomic effects on PK/PD parameters. |
| PGx | Shimada_1997 | not_relevant | 0 | 0 | The paper reports interspecies comparison of CYP450 activities and does not investigate the effect of specific human gene variants or genotypes on ethylmorphine pharmacokinetics. |
| PGx | Valoti_1998 | not_relevant | 0 | 0 | The study investigates the metabolism of chlorimipramine and chlorpromazine in rat liver microsomes, using ethylmorphine as a control probe, and does not report pharmacogenomic effects on the PK or PD of ethylmorphine. |
| PGx | Vengurlekar_2002 | not_relevant | 0 | 0 | The paper describes an assay for dextromethorphan and uses ethylmorphine only as an internal standard, without investigating pharmacogenomic effects on ethylmorphine's PK or PD parameters. |
| PGx | Xu_1997 | not_relevant | 2 | 5 | The study is an in vitro mechanistic investigation in rat liver microsomes and does not report pharmacogenomic effects on PK/PD parameters in humans or a direct genotype-phenotype relationship for ethylmorphine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
