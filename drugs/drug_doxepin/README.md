<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D04A&quot;,&quot;href&quot;:&quot;atc/D04A.md&quot;},{&quot;label&quot;:&quot;doxepin&quot;}]"></div>

# doxepin

- **generic name:** doxepin
- **ATC codes:** `D04AX01`, `N06AA12`
- **DrugBank:** [DB01142](https://go.drugbank.com/drugs/DB01142) · **PubChem:** [CID 667468](https://pubchem.ncbi.nlm.nih.gov/compound/667468)
- **molar mass:** 279.3761 g/mol (C19H21NO) — DrugBank
- **groups:** approved

## About

Doxepin is a tricyclic antidepressant used to treat depression, and as a topical antipruritic to relieve itching of the skin. It remains an approved medicine and is used fairly widely, available both as an oral antidepressant and as a skin cream.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q71704041](https://www.wikidata.org/wiki/Q71704041) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| doxepin | parent | 279.376 | C19H21NO | DrugBank | [667468](https://pubchem.ncbi.nlm.nih.gov/compound/667468) | Kirchheiner_2002 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:42 | 3:41 | 0/1/0 | 2/1/0 | 0/0/0 | 74,805/17,275 | openai / gpt-6-luna | 15 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Kirchheiner_2002_reference](drugs/drug_doxepin/Doxepin_Kirchheiner2002_reference.md) | — | general linear (no model) | 2 | Kirchheiner J et al., Contributions of CYP2D6, CYP2C9 and CYP…, Pharmacogenetics (2002) | [10.1097/00008571-200210000-00010](https://doi.org/10.1097/00008571-200210000-00010) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Li_2019_Kv_currents](drugs/drug_doxepin/pd_Li_2019_Kv_currents.md) | Vascular Kv currents ← doxepin · direct sigmoid Emax (Hill) effect | — | Li H et al., Inhibitory Effect of Tricyclic Antidepr…, Cardiovascular toxicology (2019) | [10.1007/s12012-019-09519-8](https://doi.org/10.1007/s12012-019-09519-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Meyer_2012_cAMP](drugs/drug_doxepin/pd_Meyer_2012_cAMP.md) | cAMP accumulation ← doxepin · inhibition effect | — | Meyer JM et al., A "genome-to-lead" approach for insecti…, PLoS neglected tropical dis… (2012) | [10.1371/journal.pntd.0001478](https://doi.org/10.1371/journal.pntd.0001478) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Meyer_2012_cAMP_2](drugs/drug_doxepin/pd_Meyer_2012_cAMP_2.md) | cAMP accumulation ← doxepin · inhibition effect | — | Meyer JM et al., A "genome-to-lead" approach for insecti…, PLoS neglected tropical dis… (2012) | [10.1371/journal.pntd.0001478](https://doi.org/10.1371/journal.pntd.0001478) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Claro_1986_3H_inositol_1_phosphate_accumulation](drugs/drug_doxepin/pd_Claro_1986_3H_inositol_1_phosphate_accumulation.md) | [3H]inositol 1-phosphate accumulation ← doxepin · inhibition effect | — | Claro E et al., Phosphoinositide hydrolysis mediated by…, European journal of pharmac… (1986) | [10.1016/0014-2999(86)90659-x](https://doi.org/10.1016/0014-2999(86)90659-x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=doxepin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), HRH1 (target), HRH2 (target), HRH4 (binder), HTR1A (target), HTR2A (target), HTR2B (target), HTR2C (target), HTR6 (binder), KCNH2 (inhibitor), SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kirchheiner_2002.pdf` | Kirchheiner J et al., Contributions of CYP2D6, CYP2C9 and CYP…, Pharmacogenetics (2002) | popPK | 10 | [10.1097/00008571-200210000-00010](https://doi.org/10.1097/00008571-200210000-00010) | [12360109](https://pubmed.ncbi.nlm.nih.gov/12360109) | Reports quantitative doxepin clearances and population-PK analysis in healthy volunteers. |
| `Meyer-Barner_2002.pdf` | Meyer-Barner M et al., Pharmacokinetics of doxepin and desmeth…, European journal of clinica… (2002) | popPK | 10 | [10.1007/s00228-002-0448-3](https://doi.org/10.1007/s00228-002-0448-3) | [12136371](https://pubmed.ncbi.nlm.nih.gov/12136371) | Human population-PK model, but numeric CL/F and V/F estimates are absent; only a 15% CL reduction is reported. |
| `Yan_2002_2.pdf` | Yan JH et al., Absolute bioavailability and stereosele…, Xenobiotica; the fate of fo… (2002) | popPK | 10 | [10.1080/00498250210131879](https://doi.org/10.1080/00498250210131879) | [12162857](https://pubmed.ncbi.nlm.nih.gov/12162857) | The human study models doxepin disposition, but the evidence gives no numeric model parameters beyond the absorbed fraction. |

<sub>queue written 2026-10-07T14:39:47.451880+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Claro_1986 | irrelevant | 0 | 0 | Doxepin is only an H1-receptor antagonist here; no pharmacokinetic parameters are reported. |
| popPK | Li_2019 | irrelevant | 0 | 0 | This is an in-vitro ion-channel study and reports no doxepin pharmacokinetic parameters. |
| popPK | Meyer-Barner_2002 | relevant | 10 | 2 | Human population-PK model, but numeric CL/F and V/F estimates are absent; only a 15% CL reduction is reported. |
| popPK | Meyer_2012 | irrelevant | 0 | 0 | The paper reports doxepin receptor activity and mosquito toxicity, but no pharmacokinetic disposition parameters. |
| popPK | Mochizuki_2004 | irrelevant | 1 | 0 | Doxepin is a PET tracer for receptor measurement, and no numeric doxepin disposition parameters are provided. |
| popPK | Mochizuki_2004_2 | irrelevant | 2 | 0 | Doxepin is used as a PET receptor-imaging tracer, and no numeric disposition parameter values are provided. |
| popPK | Pancrazio_1998 | irrelevant | 0 | 0 | This in-vitro ion-channel study reports no quantitative doxepin disposition parameters. |
| popPK | Yan_2002_2 | relevant | 10 | 4 | The human study models doxepin disposition, but the evidence gives no numeric model parameters beyond the absorbed fraction. |
| popPK | Yanai_1991 | irrelevant | 0 | 0 | Doxepin is only a PET tracer, and no quantitative doxepin disposition parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:39 UTC</sub>
