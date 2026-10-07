<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;olodaterol&quot;}]"></div>

# olodaterol

- **generic name:** olodaterol
- **ATC codes:** `R03AC19`, `R03AL06`
- **DrugBank:** [DB09080](https://go.drugbank.com/drugs/DB09080) · **PubChem:** [CID 11504295](https://pubchem.ncbi.nlm.nih.gov/compound/11504295)
- **molar mass:** 386.448 g/mol (C21H26N2O5) — DrugBank
- **groups:** approved, investigational

## About

Olodaterol is an inhaled long-acting beta-2 agonist used as a bronchodilator for obstructive airway diseases such as COPD. It is an approved medicine, available alone and in fixed combinations with anticholinergics, and is also being investigated for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7088466](https://www.wikidata.org/wiki/Q7088466) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| olodaterol | parent | 386.448 | C21H26N2O5 | DrugBank | [11504295](https://pubchem.ncbi.nlm.nih.gov/compound/11504295) | Borghardt_2016, Borghardt_2016_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:21 | 1:43 | 0/2/0 | 1/1/1 | 0/0/0 | 81,357/5,884 | ollama / glm-5.3-flash | 3 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Borghardt_2016_reference](drugs/drug_olodaterol/Olodaterol_Borghardt2016_reference.md) | — | 1-compartment (no model) | 3 | Borghardt JM et al., Investigating pulmonary and systemic ph…, British journal of clinical… (2016) | [10.1111/bcp.12780](https://doi.org/10.1111/bcp.12780) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Borghardt_2016_2_reference](drugs/drug_olodaterol/Olodaterol_Borghardt2016v2_reference.md) | — | 1-compartment (no model) | 3 | Borghardt JM et al., Model-based evaluation of pulmonary pha…, British journal of clinical… (2016) | [10.1111/bcp.12999](https://doi.org/10.1111/bcp.12999) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Calzetta_2017_inhibition_of_bronchial_contractility_cholinergic_contractile_tone](drugs/drug_olodaterol/pd_Calzetta_2017_inhibition_of_bronchial_contractility_choliner.md) | inhibition of bronchial contractility (cholinergic contractile tone) ← olodaterol · direct sigmoid Emax (Hill) effect | — | Calzetta L et al., Pharmacological characterization of the…, COPD (2017) | [10.1080/15412555.2017.1344627](https://doi.org/10.1080/15412555.2017.1344627) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Bouyssou_2010_hbeta_2_AR](drugs/drug_olodaterol/pd_Bouyssou_2010_hbeta_2_AR.md) | beta2-adrenoceptor agonist response (cAMP accumulation) ← olodaterol · direct sigmoid Emax (Hill) effect | — | Bouyssou T et al., Pharmacological characterization of olo…, The Journal of pharmacology… (2010) | [10.1124/jpet.110.167007](https://doi.org/10.1124/jpet.110.167007) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Calzetta_2017_inhibition_of_bronchial_contractility_tiotropium_plus_olodaterol_5_5_combination](drugs/drug_olodaterol/pd_Calzetta_2017_inhibition_of_bronchial_contractility_tiotropi.md) | inhibition of bronchial contractility (tiotropium plus olodaterol 5:5 combination) ← tiotropium plus olodaterol (5:5) · direct sigmoid Emax (Hill) effect | — | Calzetta L et al., Pharmacological characterization of the…, COPD (2017) | [10.1080/15412555.2017.1344627](https://doi.org/10.1080/15412555.2017.1344627) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Gong_2022_trough_FEV1](drugs/drug_olodaterol/pd_Gong_2022_trough_FEV1.md) | change from baseline in trough FEV1 ← olodaterol/tiotropium (fixed-dose combination) · direct Emax (saturable) effect | — | Gong Y et al., Quantitative analysis of efficacy and s…, Therapeutic advances in res… (2022) | [10.1177/17534666211066068](https://doi.org/10.1177/17534666211066068) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=olodaterol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C8` substrate, `CYP2C9` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRB2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Borghardt_2016.pdf` | Borghardt JM et al., Investigating pulmonary and systemic ph…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.12780](https://doi.org/10.1111/bcp.12780) | [26348533](https://pubmed.ncbi.nlm.nih.gov/26348533) | Population PK model of olodaterol in humans with some numeric values (fractions, absorption half-life) in abstract, but full CL/V/Q parameter estimates likely in tables/supplement not provided. |
| `Borghardt_2016_2.pdf` | Borghardt JM et al., Model-based evaluation of pulmonary pha…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.12999](https://doi.org/10.1111/bcp.12999) | [27145733](https://pubmed.ncbi.nlm.nih.gov/27145733) | Population PK model of olodaterol with quantitative absorption parameters (PBIO, absorption half-lives) reported in the abstract; disposition CL/V values may reside in the referenced prior model. |

<sub>queue written 2026-10-07T14:20:39.054524+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bouyssou_2010 | irrelevant | 1 | 0 | This is a pharmacodynamic preclinical characterization with no PK disposition parameters (CL, V, ka, half-life) reported for olodaterol. |
| popPK | Calzetta_2017 | irrelevant | 0 | 0 | This is an ex vivo pharmacodynamic drug-interaction study in equine bronchi; no PK disposition parameters for olodaterol are reported. |
| popPK | Gong_2022 | irrelevant | 0 | 0 | This is a pharmacodynamic (Emax/efficacy-loss) meta-analysis of FEV1 for LABA/LAMA combinations, not a PK study; no olodaterol disposition parameters (CL, V, ka, half-life) are reported. |
| popPK | Ichinose_2017 | irrelevant | 0 | 0 | This is a study protocol for a COPD efficacy trial (lung function, exercise, physical activity) with no PK parameters for olodaterol. |
| popPK | Voskrebenzev_2026 | irrelevant | 0 | 0 | This is an MRI imaging study of tiotropium/olodaterol effects in COPD; no PK parameters (CL, V, ka, half-life) for olodaterol are reported. |
| popPK | Xing_2021 | irrelevant | 0 | 0 | Medicinal chemistry study of novel β2-agonist analogues with in vitro cAMP assays; no olodaterol PK parameters reported. |
| popPK | Yi_2020 | irrelevant | 0 | 0 | Medicinal chemistry study of β2-agonist analogs; olodaterol only used as a comparator, no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:20 UTC</sub>
