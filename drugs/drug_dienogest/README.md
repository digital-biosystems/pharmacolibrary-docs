<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;dienogest&quot;}]"></div>

# dienogest

- **generic name:** dienogest
- **ATC codes:** `G03AA16`, `G03AB08`, `G03DB08`, `G03FA15`
- **DrugBank:** [DB09123](https://go.drugbank.com/drugs/DB09123) · **PubChem:** [CID 68861](https://pubchem.ncbi.nlm.nih.gov/compound/68861)
- **molar mass:** 311.425 g/mol (C20H25NO2) — DrugBank
- **groups:** approved, investigational

## About

Dienogest is a progestogen used in hormonal contraceptives, typically combined with an estrogen. It is an approved medicine, used in oral contraceptive preparations, and has also been investigated for other uses such as male contraception.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q139160](https://www.wikidata.org/wiki/Q139160) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:42 | 8:06 | 0/0/0 | 2/0/0 | 0/0/0 | 639,487/3,823 | einfracz / qwen3.8-27b | 33 | 1/27 | 33/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Barra_2018_pain_associated_to_endometriosis](drugs/drug_dienogest/pd_Barra_2018_pain_associated_to_endometriosis.md) | pain associated to endometriosis ← dienogest · inhibition effect | — | Barra F et al., Current understanding on pharmacokineti…, Expert opinion on drug meta… (2018) | [10.1080/17425255.2018.1461840](https://doi.org/10.1080/17425255.2018.1461840) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jensen_2023_progestin_serum_concentrations](drugs/drug_dienogest/pd_Jensen_2023_progestin_serum_concentrations.md) | progestin serum concentrations ← dienogest · model not identified | — | Jensen JT et al., Development and validation of an expand…, Contraception (2023) | [10.1016/j.contraception.2023.110130](https://doi.org/10.1016/j.contraception.2023.110130) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dienogest) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | prostate gland | `AR` target | DrugBank actor |

<sub>Actors without a tissue in the table: PGR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11202 matched, 67 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sasagawa_2008.pdf` | Sasagawa S et al., Dienogest is a selective progesterone r…, Steroids (2008) | pd | 5 | [10.1016/j.steroids.2007.10.003](https://doi.org/10.1016/j.steroids.2007.10.003) | [18061638](https://www.ncbi.nlm.nih.gov/pubmed/18061638) | metadata signals extractable PD data (EC50) |
| `Rabe_2000.pdf` | Rabe T et al., Inhibition of skin 5 alpha-reductase by…, Gynecological endocrinology… (2000) | pd | 4 | [10.3109/09513590009167685](https://doi.org/10.3109/09513590009167685) | [11075290](https://www.ncbi.nlm.nih.gov/pubmed/11075290) | metadata signals extractable PD data (IC50) |
| `Blode_2012.pdf` | Blode H et al., Evaluation of the effects of rifampicin…, Contraception (2012) | pgx | 7 | [10.1016/j.contraception.2012.01.010](https://doi.org/10.1016/j.contraception.2012.01.010) | [22445438](https://www.ncbi.nlm.nih.gov/pubmed/22445438) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T08:40:50.410417+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic models for therapeutic enzymes (e.g., imiglucerase, avalglucosidase alfa) in lysosomal storage diseases and does not mention or report any data for the drug dienogest. |
| PGx | Blode_2012 | not_relevant | 0 | 10 | The paper evaluates drug-drug interactions using exogenous CYP3A4 modulators (rifampicin, ketoconazole, erythromycin) rather than intrinsic pharmacogenomic variants or genotypes. |
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper is a methodological study on automated pharmacometric model development using Neural ODEs, demonstrating the approach on neonatal weight, simulated PK data, and warfarin, with no mention of dienogest. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic study of rivaroxaban, not dienogest. |
| popPK | Clements_2026 | irrelevant | 0 | 0 | The paper describes the population pharmacokinetics of belantamab mafodotin, not dienogest. |
| popPK | Dahan_2026 | irrelevant | 0 | 0 | The paper is a narrative review of MIDD methodologies for analgesics and does not contain original pharmacokinetic data or specific disposition parameters for dienogest. |
| PGx | Di_2013 | not_relevant | 0 | 0 | The paper reports the effects of an oral contraceptive on bone markers in a general population without analyzing the influence of any gene variant, genotype, or pharmacogenomic phenotype on these parameters. |
| popPK | Gambigliani_2026 | irrelevant | 0 | 0 | The study is a retrospective cohort assessing pain response to hormonal therapy and contains no pharmacokinetic parameters or models for dienogest. |
| popPK | Hanke_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of iclepertin (a GlyT1 inhibitor), not dienogest. |
| popPK | Hoeben_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of Calaspargase Pegol (an asparaginase conjugate), not dienogest. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a methodological evaluation of an automated PopPK modeling framework (nlmixr2auto) using 22 datasets of other drugs (e.g., bedaquiline, theophylline, imipenem); dienogest is not mentioned or studied. |
| popPK | Jensen_2023 | irrelevant | 0 | 0 | The paper describes a method validation for detecting multiple progestins for compliance monitoring and does not report any pharmacokinetic parameter values (CL, V, etc.) for dienogest. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not dienogest. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The paper is a population PK simulation study for multiple myeloma drugs (carfilzomib, daratumumab, lenalidomide, melphalan, panobinostat) and does not include dienogest as a subject or comparator. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | The paper is a benchmarking framework for covariate model building using simulated data from a generic Sanofi molecule, not a specific PK study for dienogest. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for the monoclonal antibody bevacizumab (and its biosimilar CT-P16), not for the drug dienogest. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The study focuses on PK modeling for warfarin, theophylline, and tobramycin, and does not mention or analyze dienogest. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study investigates the population pharmacokinetics of PF-06804103, an antibody-drug conjugate, and does not report any data for dienogest. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gotistobart, not dienogest. |
| popPK | Nayak_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for marstacimab, not dienogest. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of elafibranor and its metabolite GFT1007, not dienogest. |
| popPK | Sasagawa_2008 | irrelevant | 4 | 0 | The study reports in-vitro receptor affinities and plasma concentrations at ED50 in rabbits, but does not provide compartmental PK parameters (CL, V, t1/2) or a population model. |
| popPK | Serkland_2026 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of ocrelizumab, not dienogest. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The paper focuses on pharmacokinetic-pharmacodynamic modeling of meropenem and colistin/polymyxin B against Acinetobacter baumannii in vitro, with no mention of dienogest. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for 5-fluorouracil (5-FU), not dienogest. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The paper focuses entirely on the pharmacokinetics and dosing of busulfan, not dienogest. |
| popPK | Vicente_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for subcutaneous infliximab, not dienogest. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of polymyxin B, not dienogest. |
| popPK | Wanika_2026 | irrelevant | 0 | 0 | The study uses generic simulated data from the Monolix Oral1 demo project to demonstrate an uncertainty quantification metric, not the pharmacokinetics of dienogest. |
| popPK | Witta_2026 | irrelevant | 0 | 0 | The paper is a methodological simulation study evaluating model averaging algorithms for a hypothetical drug, not a pharmacokinetic study of dienogest. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, not dienogest. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic study of daptomycin, not dienogest. |
| popPK | Yokota_2024 | irrelevant | 0 | 0 | The study measures protein S activity and antigen levels as a coagulation biomarker, not pharmacokinetic parameters (CL, V, ka) for dienogest. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for the antibiotic imipenem, not the progestin dienogest. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for immunoglobulins (IVIg/SCIg), not dienogest. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
