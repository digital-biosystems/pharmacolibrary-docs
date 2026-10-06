<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;sertindole&quot;}]"></div>

# sertindole

- **generic name:** sertindole
- **ATC codes:** `N05AE03`
- **DrugBank:** [DB06144](https://go.drugbank.com/drugs/DB06144) · **PubChem:** [CID 60149](https://pubchem.ncbi.nlm.nih.gov/compound/60149)
- **molar mass:** 440.941 g/mol (C24H26ClFN4O) — DrugBank
- **groups:** approved, withdrawn

## About

Sertindole is an antipsychotic that was used to treat schizophrenia. It has been withdrawn, so it is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418050](https://www.wikidata.org/wiki/Q418050) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:23 | 3:48 | 0/0/0 | 2/1/0 | 0/0/0 | 45,647/3,051 | ollama / glm-5.3-flash | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Bundgaard_2009_CAR](drugs/drug_sertindole/pd_Bundgaard_2009_CAR.md) | conditioned avoidance response ← dehydrosertindole · direct Emax (saturable) effect | — | Bundgaard C et al., Pharmacokinetics of sertindole and its…, Biopharmaceutics & drug dis… (2009) | [10.1002/bdd.656](https://doi.org/10.1002/bdd.656) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Bundgaard_2009_D2_occupancy](drugs/drug_sertindole/pd_Bundgaard_2009_D2_occupancy.md) | striatal dopamine D2 receptor occupancy ← dehydrosertindole · direct Emax (saturable) effect | — | Bundgaard C et al., Pharmacokinetics of sertindole and its…, Biopharmaceutics & drug dis… (2009) | [10.1002/bdd.656](https://doi.org/10.1002/bdd.656) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Newman-Tancredi_1997_35S_GTPgammaS_binding](drugs/drug_sertindole/pd_Newman_Tancredi_1997_35S_GTPgammaS_binding.md) | Dopamine-stimulated [35S]GTPgammaS binding at human recombinant dopamine D4.4 receptors ← sertindole · direct Emax (saturable) effect | — | Newman-Tancredi A et al., [35S]Guanosine-5'-O-(3-thio)triphosphat…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Olsen_2008_CAR](drugs/drug_sertindole/pd_Olsen_2008_CAR.md) | Conditioned avoidance response suppression ← sertindole (+dehydrosertindole) · direct sigmoid Emax (Hill) effect | — | Olsen CK et al., Using pharmacokinetic-pharmacodynamic m…, European journal of pharmac… (2008) | [10.1016/j.ejphar.2008.02.005](https://doi.org/10.1016/j.ejphar.2008.02.005) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sertindole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (unknown), ADRA1B (unknown), ADRA1D (unknown), DRD2 (target), HTR2A (target), HTR2C (target), HTR6 (target), KCNH2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 29 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bundgaard_2009.pdf` | Bundgaard C et al., Pharmacokinetics of sertindole and its…, Biopharmaceutics & drug dis… (2009) | popPK | 9 | [10.1002/bdd.656](https://doi.org/10.1002/bdd.656) | [19475539](https://pubmed.ncbi.nlm.nih.gov/19475539) | Population/compartmental PK model of sertindole in rats is described, but numeric PK parameters (Vmax, Km, V, ka) appear not fully given in the evidence beyond potency values, likely in supplementary material. |
| `Olsen_2008.pdf` | Olsen CK et al., Using pharmacokinetic-pharmacodynamic m…, European journal of pharmac… (2008) | popPK | 7 | [10.1016/j.ejphar.2008.02.005](https://doi.org/10.1016/j.ejphar.2008.02.005) | [18325493](https://pubmed.ncbi.nlm.nih.gov/18325493) | PK/PD modelling of sertindole (and dehydrosertindole) in rats, but no numeric PK parameter values appear in the evidence; they likely reside in figures/supplementary material not provided. |
| `Newman-Tancredi_1998.pdf` | Newman-Tancredi A et al., Agonist and antagonist actions of antip…, European journal of pharmac… (1998) | pd | 4 | [10.1016/s0014-2999(98)00483-x](https://doi.org/10.1016/s0014-2999(98)00483-x) | [9760039](https://www.ncbi.nlm.nih.gov/pubmed/9760039) | metadata signals extractable PD data (Emax) |
| `Zeng_1997.pdf` | Zeng XP et al., Muscarinic m4 receptor activation by so…, European journal of pharmac… (1997) | pd | 4 | [10.1016/s0014-2999(96)00956-9](https://doi.org/10.1016/s0014-2999(96)00956-9) | [9085047](https://www.ncbi.nlm.nih.gov/pubmed/9085047) | metadata signals extractable PD data (EC50) |
| `Otani_2000.pdf` | Otani K et al., Pharmacogenetics of classical and new a…, Therapeutic drug monitoring (2000) | pgx | 8 | [10.1097/00007691-200002000-00025](https://doi.org/10.1097/00007691-200002000-00025) | [10688273](https://www.ncbi.nlm.nih.gov/pubmed/10688273) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Wong_1997.pdf` | Wong SL et al., Pharmacokinetics of sertindole and dehy…, European journal of clinica… (1997) | pgx | 8 | [10.1007/s002280050278](https://doi.org/10.1007/s002280050278) | [9218930](https://www.ncbi.nlm.nih.gov/pubmed/9218930) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Daniel_2003.pdf` | Daniel WA et al., Influence of classic and atypical neuro…, Polish journal of pharmacol… (2003) | pgx | 7 | not captured | [14730101](https://www.ncbi.nlm.nih.gov/pubmed/14730101) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Daniel_2005.pdf` | Daniel WA et al., Inhibition of rat liver CYP2D in vitro…, European neuropsychopharmac… (2005) | pgx | 7 | [10.1016/j.euroneuro.2004.05.008](https://doi.org/10.1016/j.euroneuro.2004.05.008) | [15572279](https://www.ncbi.nlm.nih.gov/pubmed/15572279) | metadata signals extractable PGX data (CYP2D, PK/PD-context) |
| `Prior_1999.pdf` | Prior TI et al., Drug metabolism and atypical antipsycho…, European neuropsychopharmac… (1999) | pgx | 7 | [10.1016/s0924-977x(98)00040-6](https://doi.org/10.1016/s0924-977x(98)00040-6) | [10422890](https://www.ncbi.nlm.nih.gov/pubmed/10422890) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Spina_2007.pdf` | Spina E et al., Metabolic drug interactions with newer…, Basic & clinical pharmacolo… (2007) | pgx | 7 | [10.1111/j.1742-7843.2007.00017.x](https://doi.org/10.1111/j.1742-7843.2007.00017.x) | [17214606](https://www.ncbi.nlm.nih.gov/pubmed/17214606) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Wong_1998.pdf` | Wong SL et al., Lack of CYP3A inhibition effects of ser…, International journal of cl… (1998) | pgx | 7 | not captured | [9562230](https://www.ncbi.nlm.nih.gov/pubmed/9562230) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-06T17:22:51.954674+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alkafaas_2024 | not_relevant | 0 | 0 | Paper is a docking/review study of ASMase inhibitors in SARS-CoV-2; sertindole only appears with a docking score, no gene variant effect on PK/PD parameters. |
| popPK | Bundgaard_2009 | relevant | 9 | 4 | Population/compartmental PK model of sertindole in rats is described, but numeric PK parameters (Vmax, Km, V, ka) appear not fully given in the evidence beyond potency values, likely in supplementary material. |
| PGx | Daniel_2003 | not_relevant | 0 | 0 | In vitro rat microsome study of neuroleptic effects on caffeine oxidation; no human gene variant/genotype effect on sertindole PK/PD. |
| PGx | Daniel_2005 | not_relevant | 3 | 4 | In vitro/in vivo rat CYP2D inhibition by neuroleptics; no gene variant/genotype effect on sertindole PK/PD parameters reported. |
| popPK | Gessner_2010 | irrelevant | 0 | 0 | In-vitro electrophysiology study of KB130015 on hERG1 channels; sertindole is only mentioned as a channel blocker, with no PK parameters. |
| PGx | Goldwaser_2022 | not_relevant | 3 | 5 | Sertindole is only reported as a moderate CYP2C9 inhibitor (IC50 40–85 µM); no gene variant/genotype effect on sertindole PK/PD is studied. |
| PGx | Hassan_2023 | not_relevant | 0 | 0 | Computational drug-repositioning/docking study; no gene variant effect on sertindole PK/PD parameters reported. |
| popPK | Newman-Tancredi_1997 | irrelevant | 0 | 0 | In vitro receptor binding study; sertindole only tested for D4 receptor affinity, no PK parameters. |
| popPK | Newman-Tancredi_1998 | irrelevant | 0 | 0 | In vitro receptor binding study with no pharmacokinetic parameters for sertindole. |
| popPK | Nourian_2008 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study with no PK disposition parameters for sertindole. |
| popPK | Olsen_2008 | relevant | 7 | 2 | PK/PD modelling of sertindole (and dehydrosertindole) in rats, but no numeric PK parameter values appear in the evidence; they likely reside in figures/supplementary material not provided. |
| PGx | Otani_2000 | not_relevant | 3 | 2 | Sertindole only mentioned as CYP2D6-metabolized; no genotype effect on its PK/PD parameters reported. |
| PGx | Prior_1999 | not_relevant | 3 | 2 | Only states sertindole is metabolized by CYP2D6; no genotype/phenotype effect on a PK/PD parameter is reported. |
| PGx | Spina_2007 | not_relevant | 3 | 3 | Review of metabolic drug interactions with antipsychotics; no gene variant effect on sertindole PK/PD parameters reported. |
| PGx | Wong_1997 | not_relevant | 0 | 0 | Study examines renal function effects on sertindole PK, not pharmacogenomic variants. |
| PGx | Wong_1998 | not_relevant | 0 | 0 | Study examines sertindole's CYP3A inhibition of terfenadine (DDI), not a gene variant effect on sertindole PK/PD. |
| PGx | Wong_1998_2 | not_relevant | 0 | 0 | Drug-drug interaction study (sertindole on alprazolam PK) with no gene variant/genotype/phenotype involved. |
| popPK | Zeng_1997 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study; sertindole is only a tested compound, no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
