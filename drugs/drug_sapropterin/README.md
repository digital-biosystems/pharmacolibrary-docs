<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;sapropterin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sapropterin_Feillet2008_reference&quot;,&quot;label&quot;:&quot;Feillet_2008_reference&quot;,&quot;href&quot;:&quot;drugs/drug_sapropterin/Sapropterin_Feillet2008_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sapropterin_Muntau2017_reference&quot;,&quot;label&quot;:&quot;Muntau_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_sapropterin/Sapropterin_Muntau2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sapropterin_Qi2015_reference&quot;,&quot;label&quot;:&quot;Qi_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_sapropterin/Sapropterin_Qi2015_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# sapropterin

- **generic name:** sapropterin
- **ATC codes:** `A16AX07`
- **DrugBank:** [DB00360](https://go.drugbank.com/drugs/DB00360) · **PubChem:** [CID 44257](https://pubchem.ncbi.nlm.nih.gov/compound/44257)
- **molar mass:** 241.2471 g/mol (C9H15N5O3) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Sapropterin (tetrahydrobiopterin or BH4) is a cofactor in the synthesis of nitric oxide. It is also essential in the conversion of phenylalanine to tyrosine by the enzyme phenylalanine-4-hydroxylase; the conversion of tyrosine to L-dopa by the enzyme tyrosine hydroxylase; and conversion of tryptophan to 5-hydroxytryptophan via tryptophan hydroxylase.

**Indication.** For the treatment of tetrahydrobiopterin (BH4) deficiency.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sapropterin | parent | 241.247 | C9H15N5O3 | DrugBank | [44257](https://pubchem.ncbi.nlm.nih.gov/compound/44257) | Feillet_2008, Muntau_2017, Qi_2015 |
| sapropterin (BH4) | metabolite | 241.2 | — | the paper | — | Muntau_2017, Qi_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 10:15 | 1:27 | 1/2/0 | 0/0/0 | 0/0/0 | 47,259/4,545 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Feillet_2008_reference](drugs/drug_sapropterin/Sapropterin_Feillet2008_reference.md) | 1-compartment, oral | 3 | Feillet F et al., Pharmacokinetics of sapropterin in pati…, Clinical pharmacokinetics (2008) | [10.2165/0003088-200847120-00006](https://doi.org/10.2165/0003088-200847120-00006) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Muntau_2017_reference](drugs/drug_sapropterin/Sapropterin_Muntau2017_reference.md) | 1-compartment (no model) | 6 (+2 cov.) | Muntau AC et al., Efficacy, safety and population pharmac…, Orphanet journal of rare di… (2017) | [10.1186/s13023-017-0600-x](https://doi.org/10.1186/s13023-017-0600-x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Qi_2015_reference](drugs/drug_sapropterin/Sapropterin_Qi2015_reference.md) | 1-compartment (no model) | 5 (+2 cov.) | Qi Y et al., A prospective population pharmacokineti…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0196-4](https://doi.org/10.1007/s40262-014-0196-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sapropterin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: NOS3 (cofactor), PAH (cofactor), PTGS2 (inducer), TH (cofactor), TPH1 (cofactor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Feillet_2008.pdf` | Feillet F et al., Pharmacokinetics of sapropterin in pati…, Clinical pharmacokinetics (2008) | popPK | 10 | [10.2165/0003088-200847120-00006](https://doi.org/10.2165/0003088-200847120-00006) | [19026037](https://pubmed.ncbi.nlm.nih.gov/19026037) | Population PK model for sapropterin with numeric CL (2100 L/h/70 kg), V (8350 L/70 kg), and half-life (6.69 h) reported directly in the text; ka value itself not shown. |

<sub>queue written 2026-09-27T10:14:14.126515+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 10:14 UTC</sub>
