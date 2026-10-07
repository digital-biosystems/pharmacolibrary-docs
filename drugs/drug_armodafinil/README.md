<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;armodafinil&quot;}]"></div>

# armodafinil

- **generic name:** armodafinil
- **ATC codes:** `N06BA13`
- **DrugBank:** [DB06413](https://go.drugbank.com/drugs/DB06413) · **PubChem:** [CID 9690109](https://pubchem.ncbi.nlm.nih.gov/compound/9690109)
- **molar mass:** 273.35 g/mol (C15H15NO2S) — DrugBank
- **groups:** approved, investigational

## About

Armodafinil, a wakefulness-promoting stimulant related to modafinil, is used to treat excessive sleepiness in conditions such as narcolepsy, hypersomnia, sleep-wake disorder, and fatigue in multiple sclerosis. It is an approved medicine, mainly used in the United States; it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418913](https://www.wikidata.org/wiki/Q418913) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| armodafinil | parent | 273.35 | C15H15NO2S | DrugBank | [9690109](https://pubchem.ncbi.nlm.nih.gov/compound/9690109) | Willavize_2017 |
| modafinil sulfone | metabolite | 289.349 | C15H15NO3S | PubChem | [6460146](https://pubchem.ncbi.nlm.nih.gov/compound/6460146) | Willavize_2017 |
| R-modafinil acid | metabolite | 274.334 | C15H14O3S | PubChem | [11300303](https://pubchem.ncbi.nlm.nih.gov/compound/11300303) | Willavize_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:12 | 1:46 | 0/1/0 | 1/0/0 | 0/0/0 | 18,743/2,634 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Willavize_2017_reference](drugs/drug_armodafinil/Armodafinil_Willavize2017_reference.md) | — | general linear (no model) | 4 | Willavize S et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2017) | [10.1002/jcph.800](https://doi.org/10.1002/jcph.800) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Darwish_2012_MSLT](drugs/drug_armodafinil/pd_Darwish_2012_MSLT.md) | Multiple Sleep Latency Test time (placebo-subtracted) ← armodafinil · direct Emax (saturable) effect | — | Darwish M et al., Armodafinil and modafinil in patients w…, Journal of clinical pharmac… (2012) | [10.1177/0091270011417825](https://doi.org/10.1177/0091270011417825) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=armodafinil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP2B6` inducer, `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP3A4` inducer, `CYP3A5` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer, `CYP3A5` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1D (target), SLC6A3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Willavize_2017.pdf` | Willavize S et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.800](https://doi.org/10.1002/jcph.800) | [27436172](https://pubmed.ncbi.nlm.nih.gov/27436172) | Population PK model for armodafinil with full numeric CL/F, Vc/F, absorption t½ and metabolite parameters present in the abstract. |
| `Darwish_2012.pdf` | Darwish M et al., Armodafinil and modafinil in patients w…, Journal of clinical pharmac… (2012) | popPK | 7 | [10.1177/0091270011417825](https://doi.org/10.1177/0091270011417825) | [22039290](https://pubmed.ncbi.nlm.nih.gov/22039290) | A population PK model for armodafinil was developed, but the evidence only reports EC50 and qualitative concentration claims; the actual PK parameter values (CL, V, ka) are not shown and likely reside in tables/figures not provided. |
| `Darwish_2008.pdf` | Darwish M et al., Interaction profile of armodafinil with…, Clinical pharmacokinetics (2008) | pgx | 8 | [10.2165/00003088-200847010-00006](https://doi.org/10.2165/00003088-200847010-00006) | [18076219](https://www.ncbi.nlm.nih.gov/pubmed/18076219) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Andrade_2015.pdf` | Andrade C, Delayed drug interactions in psychiatry…, The Journal of clinical psy… (2015) | pgx | 7 | [10.4088/JCP.15f10514](https://doi.org/10.4088/JCP.15f10514) | [26717524](https://www.ncbi.nlm.nih.gov/pubmed/26717524) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Aquinos_2021.pdf` | Aquinos BM et al., [Adrenal crisis associated with modafin…, Medicina (2021) | pgx | 7 | not captured | [34633961](https://www.ncbi.nlm.nih.gov/pubmed/34633961) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Darwish_2014.pdf` | Darwish M et al., Evaluation of the potential for a pharm…, Clinical drug investigation (2014) | pgx | 7 | [10.1007/s40261-014-0220-3](https://doi.org/10.1007/s40261-014-0220-3) | [25047407](https://www.ncbi.nlm.nih.gov/pubmed/25047407) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Darwish_2015.pdf` | Darwish M et al., Evaluation of potential pharmacokinetic…, Clinical drug investigation (2015) | pgx | 7 | [10.1007/s40261-015-0330-6](https://doi.org/10.1007/s40261-015-0330-6) | [26387027](https://www.ncbi.nlm.nih.gov/pubmed/26387027) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Niemegeers_2012.pdf` | Niemegeers P et al., Pharmacokinetic evaluation of armodafin…, Expert opinion on drug meta… (2012) | pgx | 7 | [10.1517/17425255.2012.708338](https://doi.org/10.1517/17425255.2012.708338) | [22803602](https://www.ncbi.nlm.nih.gov/pubmed/22803602) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T00:11:43.683529+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Andrade_2015 | not_relevant | 2 | 3 | Reports a drug-drug interaction (armodafinil inducing CYP3A4 affecting risperidone PK), not a gene variant/genotype effect on armodafinil PK/PD. |
| PGx | Aquinos_2021 | not_relevant | 0 | 0 | Case report of modafinil–hydrocortisone CYP3A4 interaction; no gene variant/genotype or pharmacogenomic effect on armodafinil PK/PD reported. |
| PGx | Darwish_2008 | not_relevant | 0 | 0 | Drug-drug interaction study of armodafinil with CYP probe substrates; no gene variant/genotype/phenotype effect on armodafinil PK/PD reported. |
| popPK | Darwish_2012 | relevant | 7 | 3 | A population PK model for armodafinil was developed, but the evidence only reports EC50 and qualitative concentration claims; the actual PK parameter values (CL, V, ka) are not shown and likely reside in tables/figures not provided. |
| PGx | Darwish_2012_2 | not_relevant | 0 | 0 | This is a drug-drug interaction study (armodafinil–quetiapine via CYP3A4 induction), with no gene variant/genotype/phenotype effect on armodafinil PK/PD reported. |
| PGx | Darwish_2014 | not_relevant | 0 | 0 | This is a drug-drug interaction study (armodafinil on ziprasidone PK); no gene variant/genotype/phenotype effects on PK or PD parameters are reported. |
| PGx | Darwish_2015 | not_relevant | 0 | 0 | This is a drug-drug interaction study (armodafinil on risperidone PK); no gene variant/genotype/phenotype effect on armodafinil PK/PD is reported. |
| PGx | Darwish_2015_2 | not_relevant | 0 | 0 | This is a drug-drug interaction study (armodafinil–aripiprazole) with no gene variant/genotype/phenotype effects on PK or PD parameters. |
| PGx | Darwish_2015_3 | not_relevant | 0 | 0 | This is a drug-drug interaction study (armodafinil-carbamazepine) with no gene variant, genotype, or pharmacogenomic effect reported. |
| PGx | Niemegeers_2012 | not_relevant | 2 | 3 | Review mentions CYP3A4/2C19 drug interactions but no gene variant effect on armodafinil PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:11 UTC</sub>
