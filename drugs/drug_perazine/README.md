<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;perazine&quot;}]"></div>

# perazine

- **generic name:** perazine
- **ATC codes:** `N05AB10`
- **DrugBank:** [DB12710](https://go.drugbank.com/drugs/DB12710) · **PubChem:** [CID 4744](https://pubchem.ncbi.nlm.nih.gov/compound/4744)
- **molar mass:** 339.5 g/mol (C20H25N3S) — DrugBank
- **groups:** approved, withdrawn

## About

Perazine is a phenothiazine antipsychotic used to treat psychotic disorders such as schizophrenia. It has been withdrawn in many countries, though it may still be available in a few markets.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q392481](https://www.wikidata.org/wiki/Q392481) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:26 | 4:05 | 0/0/0 | 0/0/0 | 0/0/0 | 31,738/1,461 | ollama / glm-5.3-flash | 4 | 1/3 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=perazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DRD2 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 37 matched, 37 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Störmer_2000.pdf` | Störmer E et al., Cytochrome P-450 enzymes and FMO3 contr…, Psychopharmacology (2000) | pgx | 8 | [10.1007/s002130000489](https://doi.org/10.1007/s002130000489) | [11026737](https://www.ncbi.nlm.nih.gov/pubmed/11026737) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Basińska-Ziobroń_2015.pdf` | Basińska-Ziobroń A et al., Inhibition of human cytochrome P450 iso…, Pharmacological reports : PR (2015) | pgx | 7 | [10.1016/j.pharep.2015.04.005](https://doi.org/10.1016/j.pharep.2015.04.005) | [26481538](https://www.ncbi.nlm.nih.gov/pubmed/26481538) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Daniel_2005.pdf` | Daniel WA et al., Inhibition of rat liver CYP2D in vitro…, European neuropsychopharmac… (2005) | pgx | 7 | [10.1016/j.euroneuro.2004.05.008](https://doi.org/10.1016/j.euroneuro.2004.05.008) | [15572279](https://www.ncbi.nlm.nih.gov/pubmed/15572279) | metadata signals extractable PGX data (CYP2D, PK/PD-context) |
| `Paulzen_2017.pdf` | Paulzen M et al., Cytochrome P450-mediated interaction be…, British journal of clinical… (2017) | pgx | 7 | [10.1111/bcp.13255](https://doi.org/10.1111/bcp.13255) | [28160505](https://www.ncbi.nlm.nih.gov/pubmed/28160505) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Wójcikowski_2010.pdf` | Wójcikowski J et al., Main contribution of the cytochrome P45…, Biochemical pharmacology (2010) | pgx | 7 | [10.1016/j.bcp.2010.06.045](https://doi.org/10.1016/j.bcp.2010.06.045) | [20615392](https://www.ncbi.nlm.nih.gov/pubmed/20615392) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Tybura_2014.pdf` | Tybura P et al., Pharmacogenetics of adverse events in s…, Psychiatry research (2014) | pgx | 5 | [10.1016/j.psychres.2014.05.039](https://doi.org/10.1016/j.psychres.2014.05.039) | [24930580](https://www.ncbi.nlm.nih.gov/pubmed/24930580) | metadata signals extractable PGX data (COMT) |
| `Zivković_2010.pdf` | Zivković M et al., The role of CYP2D6 and TaqI A polymorph…, Psychiatria Danubina (2010) | pgx | 5 | not captured | [20305604](https://www.ncbi.nlm.nih.gov/pubmed/20305604) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-06T16:25:48.106471+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Basińska-Ziobroń_2015 | not_relevant | 0 | 0 | In vitro levomepromazine inhibition of CYPs; perazine only as a probe substrate, no gene variant/genotype effect on perazine PK/PD. |
| PGx | Baumann_2020 | not_relevant | 3 | 6 | The paper reports perazine's inhibitory effect on CYP2D6/CYP2C19 phenotyping of probe drugs (dextromethorphan, mephenytoin), not how a gene variant alters perazine's own PK/PD parameters; no genotyping was performed. |
| popPK | Chessell_1998 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study of P2X7 antagonists; no perazine PK parameters reported. |
| PGx | Danek_2020 | not_relevant | 0 | 0 | Perazine is only used as a probe substrate for CYP2C19 activity; no gene variant/genotype/phenotype effect on perazine PK/PD is reported. |
| PGx | Danek_2020_2 | not_relevant | 0 | 0 | Perazine is only used as a probe substrate for CYP2C19 activity; no gene variant/genotype effect on perazine PK/PD is reported. |
| PGx | Danek_2021 | not_relevant | 0 | 0 | Study examines CYP induction by levomepromazine/clozapine; perazine is only a probe substrate for CYP2C19 activity, with no gene variant/genotype effect on perazine PK/PD reported. |
| PGx | Daniel_2001 | not_relevant | 0 | 0 | In vitro rat microsome study of drug–drug CYP inhibition; no gene variant/genotype effect on perazine PK/PD. |
| PGx | Daniel_2002 | not_relevant | 3 | 7 | Inhibitor-based CYP phenotyping in rat microsomes, not a gene variant/genotype effect on PK/PD in humans. |
| PGx | Daniel_2005 | not_relevant | 2 | 5 | Study examines drug-drug inhibition of rat CYP2D by perazine, not a gene variant/genotype effect on perazine PK/PD. |
| PGx | Paulzen_2017 | not_relevant | 3 | 5 | Reports a drug-drug interaction (perazine inhibiting CYP2D6/3A4 affecting risperidone PK), not a gene variant/genotype effect on perazine PK/PD. |
| popPK | Schley_1981 | irrelevant | 4 | 2 | Excretion/metabolism study with only qualitative model description (two-compartment fit of renal excretion); no numeric CL, V, or half-life values are given in the evidence. |
| PGx | Tybura_2014 | not_relevant | 5 | 3 | Study examined gene associations with adverse events (weight, EPS) but found no significant polymorphism associations, and reports no PK/PD parameter changes. |
| PGx | Wójcikowski_2002 | not_relevant | 0 | 0 | Study examines perazine's inhibition of CYP enzymes in vitro, not a gene variant effect on perazine PK/PD. |
| PGx | Wójcikowski_2003 | not_relevant | 3 | 5 | Enzyme induction by TCDD/rifampicin in vitro, not a gene variant/genotype effect on perazine PK/PD parameters. |
| PGx | Wójcikowski_2004 | not_relevant | 3 | 5 | Identifies CYP isoenzymes catalyzing perazine metabolism via correlation/inhibition in vitro, but no gene variant/genotype effect on PK/PD parameters in subjects. |
| PGx | Wójcikowski_2006 | not_relevant | 2 | 3 | Perazine is only mentioned as a comparison; the study characterizes thioridazine metabolism by CYP enzymes in vitro, with no genotype/phenotype effect on perazine PK/PD parameters. |
| PGx | Wójcikowski_2009 | not_relevant | 0 | 0 | In vitro study of perazine's inhibition of CYP1A2; no gene variant/genotype effect on perazine PK/PD reported. |
| PGx | Wójcikowski_2010 | not_relevant | 2 | 3 | Perazine is only mentioned in comparison; no gene variant/genotype effect on perazine PK/PD parameters is reported. |
| PGx | Wójcikowski_2012 | not_relevant | 0 | 0 | In vitro autoinduction study of metabolism in hepatocytes; no gene variant/genotype/phenotype effects on PK/PD parameters. |
| PGx | Wójcikowski_2020 | not_relevant | 0 | 0 | Paper studies asenapine inhibition of CYP enzymes; perazine is only a probe substrate, no gene variant/genotype effect on perazine PK/PD reported. |
| PGx | Zivković_2010 | not_relevant | 3 | 2 | Case reports of neuroleptic syndrome with CYP2D6/TaqI A polymorphisms; no PK/PD parameter of perazine quantified. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
