<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;adinazolam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Adinazolam_Venkatakrishnan2005_reference&quot;,&quot;label&quot;:&quot;Venkatakrishnan_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_adinazolam/Adinazolam_Venkatakrishnan2005_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# adinazolam

- **generic name:** adinazolam
- **ATC codes:** `N05BA07`
- **DrugBank:** [DB00546](https://go.drugbank.com/drugs/DB00546) · **PubChem:** [CID 37632](https://pubchem.ncbi.nlm.nih.gov/compound/37632)
- **molar mass:** 351.833 g/mol (C19H18ClN5) — DrugBank
- **groups:** experimental

## About

Adinazolam is a benzodiazepine derivative that was studied as an antidepressant and anxiolytic medicine. It remained experimental and was never approved or marketed, so it is not in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4682904](https://www.wikidata.org/wiki/Q4682904) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| adinazolam | parent | 351.833 | C19H18ClN5 | DrugBank | [37632](https://pubchem.ncbi.nlm.nih.gov/compound/37632) | Venkatakrishnan_2005 |
| N-desmethyl adinazolam | metabolite | 337.811 | C18H16ClN5 | PubChem | [119094](https://pubchem.ncbi.nlm.nih.gov/compound/119094) | Venkatakrishnan_2005 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:57 | 0:58 | 1/0/0 | 1/1/0 | 0/0/0 | 32,151/2,471 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Venkatakrishnan_2005_reference](drugs/drug_adinazolam/Adinazolam_Venkatakrishnan2005_reference.md) | ▶ model + simulator | 1-compartment, oral | 9 | Venkatakrishnan K et al., Kinetics and dynamics of intravenous ad…, Journal of clinical pharmac… (2005) | [10.1177/0091270004269105](https://doi.org/10.1177/0091270004269105) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Fleishaker_1991_DSST_decrement](drugs/drug_adinazolam/pd_Fleishaker_1991_DSST_decrement.md) | percentage decrement in digit symbol substitution test ← N-desmethyladinazolam · direct sigmoid Emax (Hill) effect | — | Fleishaker JC et al., N-desmethyladinazolam pharmacokinetics…, Psychopharmacology (1991) | [10.1007/BF02244306](https://doi.org/10.1007/BF02244306) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Kozlowski_1988_MeTRH_binding](drugs/drug_adinazolam/pd_Kozlowski_1988_MeTRH_binding.md) | Inhibition of 3H-3-methyl-His-2-TRH (MeTRH) binding to TRH receptors ← adinazolam · inhibition effect | — | Kozlowski MR, Inhibition of the binding and the behav…, Pharmacology, biochemistry,… (1988) | [10.1016/0091-3057(88)90426-1](https://doi.org/10.1016/0091-3057(88)90426-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=adinazolam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), TSPO (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Venkatakrishnan_2005.pdf` | Venkatakrishnan K et al., Kinetics and dynamics of intravenous ad…, Journal of clinical pharmac… (2005) | popPK | 10 | [10.1177/0091270004269105](https://doi.org/10.1177/0091270004269105) | [15831776](https://pubmed.ncbi.nlm.nih.gov/15831776) | Direct IV PK study of adinazolam in humans with numeric V, CL, and half-life reported in the abstract. |
| `Fleishaker_1991.pdf` | Fleishaker JC et al., N-desmethyladinazolam pharmacokinetics…, Psychopharmacology (1991) | popPK | 6 | [10.1007/BF02244306](https://doi.org/10.1007/BF02244306) | [1796125](https://pubmed.ncbi.nlm.nih.gov/1796125) | PK of N-desmethyladinazolam (adinazolam's major metabolite) was studied in humans, but the evidence gives only an EC50 (325 ng/ml) and no CL/V/t½ values, which are not shown. |
| `Kozlowski_1988.pdf` | Kozlowski MR, Inhibition of the binding and the behav…, Pharmacology, biochemistry,… (1988) | pd | 4 | [10.1016/0091-3057(88)90426-1](https://doi.org/10.1016/0091-3057(88)90426-1) | [2845442](https://www.ncbi.nlm.nih.gov/pubmed/2845442) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T17:56:37.853008+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | File_1986 | irrelevant | 0 | 0 | Behavioral place-conditioning study in rats with no PK parameters or numeric disposition values for adinazolam. |
| popPK | Fleishaker_1991 | relevant | 6 | 3 | PK of N-desmethyladinazolam (adinazolam's major metabolite) was studied in humans, but the evidence gives only an EC50 (325 ng/ml) and no CL/V/t½ values, which are not shown. |
| popPK | Kozlowski_1988 | irrelevant | 0 | 0 | Receptor-binding/pharmacodynamic study with no PK disposition parameters for adinazolam. |
| PGx | Wu_2022 | not_relevant | 2 | 0 | Review only notes genetic polymorphisms' influence on designer benzodiazepine metabolism is unclarified; no gene-variant effect on adinazolam PK/PD is reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 17:56 UTC</sub>
