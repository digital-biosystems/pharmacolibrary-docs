<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;gemifloxacin&quot;}]"></div>

# gemifloxacin

- **generic name:** gemifloxacin
- **ATC codes:** `J01MA15`
- **DrugBank:** [DB01155](https://go.drugbank.com/drugs/DB01155) · **PubChem:** [CID 9571107](https://pubchem.ncbi.nlm.nih.gov/compound/9571107)
- **molar mass:** 389.3809 g/mol (C18H20FN5O4) — DrugBank
- **groups:** approved, investigational

## About

Gemifloxacin is a fluoroquinolone antibiotic used to treat bacterial infections such as urinary tract infections, acute bronchitis, and gram-negative bacterial infections. It is an approved antibacterial, though fluoroquinolones carry a boxed warning and are generally reserved for situations where other antibiotics are not suitable.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1639595](https://www.wikidata.org/wiki/Q1639595) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:25 | 1:22 | 0/0/0 | 1/1/0 | 0/0/0 | 35,561/1,517 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [MacGowan_2001_AUBKC_48](drugs/drug_gemifloxacin/pd_MacGowan_2001_AUBKC_48.md) | area under the bacterial-kill curve from 0 to 48 h ← gemifloxacin · direct sigmoid Emax (Hill) effect | — | MacGowan AP et al., Pharmacodynamics of gemifloxacin agains…, Antimicrobial agents and ch… (2001) | [10.1128/AAC.45.10.2916-2921.2001](https://doi.org/10.1128/AAC.45.10.2916-2921.2001) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [MacGowan_2001_T99_9](drugs/drug_gemifloxacin/pd_MacGowan_2001_T99_9.md) | time needed to kill 99.9% of the starting inoculum ← gemifloxacin · categorical (graded) response model | — | MacGowan AP et al., Pharmacodynamics of gemifloxacin agains…, Antimicrobial agents and ch… (2001) | [10.1128/AAC.45.10.2916-2921.2001](https://doi.org/10.1128/AAC.45.10.2916-2921.2001) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Allen_2004_bacterial_count](drugs/drug_gemifloxacin/pd_Allen_2004_bacterial_count.md) | bacterial count biomarker turnover ← gemifloxacin | — | Allen GP et al., In vitro activities of mutant preventio…, International journal of an… (2004) | [10.1016/j.ijantimicag.2004.03.011](https://doi.org/10.1016/j.ijantimicag.2004.03.011) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gemifloxacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Roy_2010.pdf` | Roy B et al., Convulsant activity and pharmacokinetic…, Journal of pharmaceutical s… (2010) | popPK | 6 | [10.1002/jps.21888](https://doi.org/10.1002/jps.21888) | [19670296](https://pubmed.ncbi.nlm.nih.gov/19670296) | The study models the pharmacokinetics of gemifloxacin in rats, but the specific numeric parameter values are not present in the provided text. |
| `Blondeau_2004.pdf` | Blondeau JM et al., The role of PK/PD parameters to avoid s…, Journal of chemotherapy (Fl… (2004) | pd | 5 | [10.1080/1120009x.2004.11782371](https://doi.org/10.1080/1120009x.2004.11782371) | [15334827](https://www.ncbi.nlm.nih.gov/pubmed/15334827) | metadata signals extractable PD data (PK/PD) |
| `Owens_2005.pdf` | Owens RC et al., Assessment of pharmacokinetic-pharmacod…, Diagnostic microbiology and… (2005) | pd | 5 | [10.1016/j.diagmicrobio.2004.08.019](https://doi.org/10.1016/j.diagmicrobio.2004.08.019) | [15629228](https://www.ncbi.nlm.nih.gov/pubmed/15629228) | metadata signals extractable PD data (PK-PD) |
| `unknown_2012.pdf` | unknown, Retraction. Roy B, Bose A, Bhaumik U, D…, Journal of pharmaceutical s… (2012) | pd | 5 | [10.1002/jps.23012](https://doi.org/10.1002/jps.23012) | [22319775](https://www.ncbi.nlm.nih.gov/pubmed/22319775) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Allen_2004.pdf` | Allen GP et al., In vitro activities of mutant preventio…, International journal of an… (2004) | pd | 4 | [10.1016/j.ijantimicag.2004.03.011](https://doi.org/10.1016/j.ijantimicag.2004.03.011) | [15288314](https://www.ncbi.nlm.nih.gov/pubmed/15288314) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-07T12:25:08.367477+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abidullah_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of antispasmodic effects on isolated rabbit jejunum, not a pharmacokinetic study. |
| PGx | Garrison_2003 | not_relevant | 0 | 1 | The paper describes the in vitro effects of bacterial genetic mutations on antibiotic activity (bactericidal rates/log reductions) rather than a human pharmacogenomic effect on a pharmacokinetic or pharmacodynamic parameter of gemifloxacin. |
| PGx | Hekmatpour_2026 | not_relevant | 0 | 0 | The paper studies bacterial resistance mechanisms (mutations in M. tuberculosis) rather than human pharmacogenomics. |
| popPK | MacGowan_2001 | irrelevant | 1 | 0 | The study is an in vitro pharmacodynamic investigation that uses simulated human PK data to test antibacterial effects, rather than reporting original quantitative disposition parameters or a PK model for gemifloxacin. |
| popPK | Nagy_2015 | irrelevant | 0 | 0 | The paper studies the mechanism of action of omecamtiv mecarbil in rat muscle cells and does not involve gemifloxacin or pharmacokinetic parameters. |
| popPK | Noreddin_2007 | irrelevant | 1 | 0 | This is a pharmacodynamic simulation study that uses PK parameters from external sources but does not report original quantitative PK parameter values (CL, V, Q) for gemifloxacin. |
| popPK | Owens_2005 | irrelevant | 4 | 0 | The paper describes a PK-PD simulation using a model from other trials but does not report the quantitative PK parameter values (CL, V, etc.) for gemifloxacin in the text provided. |
| popPK | Roy_2010 | relevant | 6 | 0 | The study models the pharmacokinetics of gemifloxacin in rats, but the specific numeric parameter values are not present in the provided text. |
| PGx | Shams_2005 | not_relevant | 0 | 0 | The text discusses general PK/PD properties of fluoroquinolones but does not report any pharmacogenomic effects. |
| popPK | Vallet_2011 | irrelevant | 2 | 0 | This is a cellular pharmacology study focused on intracellular accumulation and activity in macrophages, not a systemic pharmacokinetic study reporting population PK parameters (CL, V, etc.) for gemifloxacin. |
| popPK | unknown_2012 | irrelevant | 0 | 0 | no_text gate: only 264 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
