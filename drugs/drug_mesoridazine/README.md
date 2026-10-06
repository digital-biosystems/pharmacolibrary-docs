<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;mesoridazine&quot;}]"></div>

# mesoridazine

- **generic name:** mesoridazine
- **ATC codes:** `N05AC03`
- **DrugBank:** [DB00933](https://go.drugbank.com/drugs/DB00933) · **PubChem:** [CID 4078](https://pubchem.ncbi.nlm.nih.gov/compound/4078)
- **molar mass:** 386.574 g/mol (C21H26N2OS2) — DrugBank
- **groups:** approved, withdrawn

## About

Mesoridazine is a phenothiazine antipsychotic that was used to treat schizophrenia and schizophreniform disorder. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6821618](https://www.wikidata.org/wiki/Q6821618) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:04 | 4:50 | 0/0/0 | 3/1/0 | 0/0/0 | 68,300/2,677 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rabbit</span> | [Niedzwiecki_1984_DA_overflow](drugs/drug_mesoridazine/pd_Niedzwiecki_1984_DA_overflow.md) | Electrically evoked dopamine overflow (antagonism of apomorphine-induced inhibition of DA release) ← mesoridazine · inhibition effect | — | Niedzwiecki DM et al., Greater potency of mesoridazine and sul…, The Journal of pharmacology… (1984) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">cattle</span> | [Perry_1983_Competition_at_specific_alpha_2_adrenergic_binding_sites_in_bovine_caudate_nucleus](drugs/drug_mesoridazine/pd_Perry_1983_Competition_at_specific_alpha_2_adrenergic_bindin.md) | Competition at specific alpha 2-adrenergic binding sites in bovine caudate nucleus ← mesoridazine · inhibition effect | — | Perry BD et al., Interactions of neuroleptic compounds a…, European journal of pharmac… (1983) | [10.1016/0014-2999(83)90654-4](https://doi.org/10.1016/0014-2999(83)90654-4) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Su_2004_HERG_block](drugs/drug_mesoridazine/pd_Su_2004_HERG_block.md) | HERG K+ current block ← mesoridazine · inhibition effect | — | Su Z et al., Mesoridazine: an open-channel blocker o…, Journal of molecular and ce… (2004) | [10.1016/j.yjmcc.2003.10.017](https://doi.org/10.1016/j.yjmcc.2003.10.017) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Limberis_2006_hERG_block](drugs/drug_mesoridazine/pd_Limberis_2006_hERG_block.md) | hERG current block (IKr) ← mesoridazine · direct sigmoid Emax (Hill) effect | — | Limberis JT et al., Altering extracellular potassium concen…, Clinical and experimental p… (2006) | [10.1111/j.1440-1681.2006.04487.x](https://doi.org/10.1111/j.1440-1681.2006.04487.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mesoridazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DRD2 (target), HTR2A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 47 matched, 47 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wagner_1991.pdf` | Wagner JG et al., Stepwise determination of multicompartm…, Journal of pharmacokinetics… (1991) | popPK | 8 | [10.1007/BF01061665](https://doi.org/10.1007/BF01061665) | [1920088](https://pubmed.ncbi.nlm.nih.gov/1920088) | Mesoridazine is a subject drug with compartmental disposition/absorption parameters estimated from 20 extravascular datasets, but the abstract gives no numeric parameter values (likely in tables/figures not provided). |
| `Niedzwiecki_1984.pdf` | Niedzwiecki DM et al., Greater potency of mesoridazine and sul…, The Journal of pharmacology… (1984) | pd | 4 | not captured | [6707914](https://www.ncbi.nlm.nih.gov/pubmed/6707914) | metadata signals extractable PD data (IC50) |
| `Perry_1983.pdf` | Perry BD et al., Interactions of neuroleptic compounds a…, European journal of pharmac… (1983) | pd | 4 | [10.1016/0014-2999(83)90654-4](https://doi.org/10.1016/0014-2999(83)90654-4) | [6140181](https://www.ncbi.nlm.nih.gov/pubmed/6140181) | metadata signals extractable PD data (IC50) |
| `Su_2004.pdf` | Su Z et al., Mesoridazine: an open-channel blocker o…, Journal of molecular and ce… (2004) | pd | 4 | [10.1016/j.yjmcc.2003.10.017](https://doi.org/10.1016/j.yjmcc.2003.10.017) | [14734057](https://www.ncbi.nlm.nih.gov/pubmed/14734057) | metadata signals extractable PD data (IC50) |
| `Berecz_2003.pdf` | Berecz R et al., Thioridazine steady-state plasma concen…, European journal of clinica… (2003) | pgx | 8 | [10.1007/s00228-003-0576-4](https://doi.org/10.1007/s00228-003-0576-4) | [12682803](https://www.ncbi.nlm.nih.gov/pubmed/12682803) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Dorado_2007.pdf` | Dorado P et al., No effect of the CYP1A2*1F genotype on…, European journal of clinica… (2007) | pgx | 8 | [10.1007/s00228-007-0284-6](https://doi.org/10.1007/s00228-007-0284-6) | [17345072](https://www.ncbi.nlm.nih.gov/pubmed/17345072) | metadata signals extractable PGX data (CYP1A2*1F, PK/PD-context) |
| `Dorado_2009.pdf` | Dorado P et al., Relevance of CYP2D6 -1584C&gt;G polymorphi…, Pharmacogenomics (2009) | pgx | 8 | [10.2217/pgs.09.57](https://doi.org/10.2217/pgs.09.57) | [19604081](https://www.ncbi.nlm.nih.gov/pubmed/19604081) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Thanacoody_2007.pdf` | Thanacoody RH et al., Factors affecting drug concentrations a…, Clinical pharmacology and t… (2007) | pgx | 8 | [10.1038/sj.clpt.6100195](https://doi.org/10.1038/sj.clpt.6100195) | [17460606](https://www.ncbi.nlm.nih.gov/pubmed/17460606) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Carrillo_1999.pdf` | Carrillo JA et al., Pharmacokinetic interaction of fluvoxam…, Journal of clinical psychop… (1999) | pgx | 7 | [10.1097/00004714-199912000-00002](https://doi.org/10.1097/00004714-199912000-00002) | [10587283](https://www.ncbi.nlm.nih.gov/pubmed/10587283) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `LLerena_2002.pdf` | LLerena A et al., QTc interval lengthening is related to…, Journal of psychopharmacolo… (2002) | pgx | 7 | [10.1177/026988110201600411](https://doi.org/10.1177/026988110201600411) | [12503836](https://www.ncbi.nlm.nih.gov/pubmed/12503836) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Lee_2010.pdf` | Lee CA et al., Identification of novel substrates for…, Drug metabolism and disposi… (2010) | pgx | 7 | [10.1124/dmd.109.030270](https://doi.org/10.1124/dmd.109.030270) | [19923256](https://www.ncbi.nlm.nih.gov/pubmed/19923256) | metadata signals extractable PGX data (CYP2J2, PK/PD-context) |
| `Eap_1996.pdf` | Eap CB et al., Plasma levels of the enantiomers of thi…, Clinical pharmacology and t… (1996) | pgx | 5 | [10.1016/S0009-9236(96)80010-5](https://doi.org/10.1016/S0009-9236(96)80010-5) | [8653995](https://www.ncbi.nlm.nih.gov/pubmed/8653995) | metadata signals extractable PGX data (CYP2D6) |
| `LLerena_2001.pdf` | LLerena A et al., Effect of thioridazine dosage on the de…, Therapeutic drug monitoring (2001) | pgx | 5 | [10.1097/00007691-200112000-00004](https://doi.org/10.1097/00007691-200112000-00004) | [11802093](https://www.ncbi.nlm.nih.gov/pubmed/11802093) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-06T16:03:37.227989+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Baumann_1992 | not_relevant | 3 | 5 | The paper reports no significant correlation between CYP2D6 (dextromethorphan) metabolism and mesoridazine plasma levels, so no pharmacogenomic effect on mesoridazine PK/PD is demonstrated. |
| PGx | Berecz_2003 | not_relevant | 3 | 5 | For mesoridazine, no significant CYP2D6 or CYP2C9 genotype effect on C/D was found; only smoking (non-genetic) affected its levels. |
| PGx | Carrillo_1999 | not_relevant | 2 | 3 | Effect is a drug-drug interaction (fluvoxamine) on mesoridazine concentrations, not a gene variant/genotype/phenotype effect. |
| PGx | LLerena_2001 | not_relevant | 3 | 3 | The paper reports CYP2D6 genotype effects on thioridazine levels and debrisoquine MR, but no genotype-dependent change in a PK/PD parameter of mesoridazine itself (only measured as a metabolite). |
| PGx | Lee_2010 | not_relevant | 2 | 3 | Paper identifies mesoridazine as a CYP2J2 substrate in vitro, but reports no gene variant/genotype effect on PK or PD parameters. |
| PGx | Sasahara_2015 | not_relevant | 2 | 0 | Computational study of CYP2D6 metabolism of thioridazine, not mesoridazine, and no gene variant effect on PK/PD parameters reported. |
| popPK | Wagner_1991 | relevant | 8 | 3 | Mesoridazine is a subject drug with compartmental disposition/absorption parameters estimated from 20 extravascular datasets, but the abstract gives no numeric parameter values (likely in tables/figures not provided). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
