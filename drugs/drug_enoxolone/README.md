<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D03A&quot;,&quot;href&quot;:&quot;atc/D03A.md&quot;},{&quot;label&quot;:&quot;enoxolone&quot;}]"></div>

# enoxolone

- **generic name:** enoxolone
- **ATC codes:** `D03AX10`
- **DrugBank:** [DB13089](https://go.drugbank.com/drugs/DB13089) · **PubChem:** [CID 10114](https://pubchem.ncbi.nlm.nih.gov/compound/10114)
- **molar mass:** 470.694 g/mol (C30H46O4) — DrugBank
- **groups:** investigational

## About

Enoxolone (glycyrrhetic acid) is an anti-inflammatory triterpenoid that has been used topically to help heal wounds and ulcers. It is classified as investigational and is not an approved systemic medicine; its ATC listing places it among dermatological cicatrizants.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5948038](https://www.wikidata.org/wiki/Q5948038) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| enoxolone (glycyrrhetic acid (GA; enoxolone)) | parent | 470.694 | C30H46O4 | DrugBank | [10114](https://pubchem.ncbi.nlm.nih.gov/compound/10114) | Lu_2008, Xu_2014 |
| 3MGA | metabolite | 646.818 | C36H54O10 | PubChem | [161800](https://pubchem.ncbi.nlm.nih.gov/compound/161800) | Xu_2014 |
| GAM (phase II metabolites of GA) | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:42 | 5:53 | 0/2/0 | 0/1/0 | 0/0/0 | 114,015/29,564 | openai / gpt-6-luna | 3 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lu_2008_reference](drugs/drug_enoxolone/Enoxolone_Lu2008_reference.md) | — | 1-compartment (no model) | 6 | Lu Y et al., [Study on pharmacokinetics of glycyrrhe…, Zhongguo Zhong yao za zhi =… (2008) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.70).">human + animal</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Xu_2014_reference](drugs/drug_enoxolone/Enoxolone_Xu2014_reference.md) | — | general linear (no model) | 11 | Xu R et al., A semi-physiologically based pharmacoki…, PloS one (2014) | [10.1371/journal.pone.0114049](https://doi.org/10.1371/journal.pone.0114049) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Ploeger_2001_urinary_cortisol_cortisone_ratio](drugs/drug_enoxolone/pd_Ploeger_2001_urinary_cortisol_cortisone_ratio.md) | urinary cortisol-cortisone ratio ← glycyrrhetic acid · inhibition effect | — | Ploeger B et al., A population physiologically based phar…, Toxicology and applied phar… (2001) | [10.1006/taap.2000.9078](https://doi.org/10.1006/taap.2000.9078) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=enoxolone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PTPN1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lu_2008.pdf` | Lu Y et al., [Study on pharmacokinetics of glycyrrhe…, Zhongguo Zhong yao za zhi =… (2008) | popPK | 10 | not captured | [18831211](https://pubmed.ncbi.nlm.nih.gov/18831211) | Glycyrrhetic acid (enoxolone) was modeled in rats, and numeric disposition parameters are provided. |
| `Ploeger_2001.pdf` | Ploeger B et al., A population physiologically based phar…, Toxicology and applied phar… (2001) | popPK | 10 | [10.1006/taap.2000.9078](https://doi.org/10.1006/taap.2000.9078) | [11141355](https://pubmed.ncbi.nlm.nih.gov/11141355) | A population PBPK model of glycyrrhetic acid is reported, but no numeric disposition parameter values are present in the evidence. |
| `Peng_2010.pdf` | Peng WB et al., In vitro and in vivo pharmacokinetics o…, Journal of Asian natural pr… (2010) | popPK | 8 | [10.1080/10286020.2010.508283](https://doi.org/10.1080/10286020.2010.508283) | [20924902](https://pubmed.ncbi.nlm.nih.gov/20924902) | Rat plasma data for released enoxolone were fit with a two-compartment model, but no numeric parameter values are provided. |

<sub>queue written 2026-10-07T13:37:13.632581+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bera_2025 | irrelevant | 0 | 0 | This is an in-vitro anticancer study with SwissADME predictions, not quantitative enoxolone disposition parameters. |
| popPK | Ishida_1989 | irrelevant | 0 | 0 | The evidence contains only extraction-software boilerplate, with no study details or numeric pharmacokinetic values. |
| popPK | Peng_2010 | relevant | 8 | 1 | Rat plasma data for released enoxolone were fit with a two-compartment model, but no numeric parameter values are provided. |
| popPK | Ploeger_2001 | relevant | 10 | 1 | A population PBPK model of glycyrrhetic acid is reported, but no numeric disposition parameter values are present in the evidence. |
| popPK | Rakhimova_2023 | irrelevant | 0 | 0 | This is an in-vitro rat thymocyte study of cell-volume regulation, with no enoxolone pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:37 UTC</sub>
