<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vindesine&quot;}]"></div>

# vindesine

- **generic name:** vindesine
- **ATC codes:** `L01CA03`
- **DrugBank:** [DB00309](https://go.drugbank.com/drugs/DB00309) · **PubChem:** [CID 40839](https://pubchem.ncbi.nlm.nih.gov/compound/40839)
- **molar mass:** 753.941 g/mol (C43H55N5O7) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Vindesine is a vinca alkaloid that was used as an anticancer (antineoplastic) drug. It is no longer in use, having been withdrawn, and it was never authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416660](https://www.wikidata.org/wiki/Q416660) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vindesine | parent | 753.941 | C43H55N5O7 | DrugBank | [40839](https://pubchem.ncbi.nlm.nih.gov/compound/40839) | Owellen_1977 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:11 | 2:01 | 0/1/1 | 0/0/0 | 0/0/0 | 21,849/6,056 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Owellen_1977_humans](drugs/drug_vindesine/Vindesine_Owellen1977_reference.md) | — | 2-compartment (no model) | 5 | Owellen RJ et al., Pharmacokinetics of vindesine and vincr…, Cancer research (1977) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nelson_1979_patients with advanced cancer](drugs/drug_vindesine/Vindesine_Nelson1979_reference.md) | — | 1-compartment (no model) | 0 | Nelson RL et al., Clinical pharmacokinetics of vindesine, Cancer chemotherapy and pha… (1979) | [10.1007/BF00257188](https://doi.org/10.1007/BF00257188) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vindesine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: TUBB1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Owellen_1977.pdf` | Owellen RJ et al., Pharmacokinetics of vindesine and vincr…, Cancer research (1977) | popPK | 10 | not captured | [872088](https://pubmed.ncbi.nlm.nih.gov/872088) | Human vindesine has readable three-compartment parameters and numeric half-lives and volumes. |
| `Sethi_1984.pdf` | Sethi VS et al., Pharmacokinetics of vincristine, vinbla…, Cancer chemotherapy and pha… (1984) | popPK | 10 | [10.1007/BF00255905](https://doi.org/10.1007/BF00255905) | [6690071](https://pubmed.ncbi.nlm.nih.gov/6690071) | Vindesine has reported quantitative two-compartment PK parameters and their values are present. |
| `Nelson_1979.pdf` | Nelson RL et al., Clinical pharmacokinetics of vindesine, Cancer chemotherapy and pha… (1979) | popPK | 9 | [10.1007/BF00257188](https://doi.org/10.1007/BF00257188) | [455583](https://pubmed.ncbi.nlm.nih.gov/455583) | Human vindesine pharmacokinetics are described by a three-compartment model with numeric serum half-lives reported. |
| `Zhu_2014.pdf` | Zhu RH et al., Validated HILIC-MS/MS assay for determi…, Journal of pharmaceutical a… (2014) | popPK | 9 | [10.1016/j.jpba.2014.03.017](https://doi.org/10.1016/j.jpba.2014.03.017) | [24721203](https://pubmed.ncbi.nlm.nih.gov/24721203) | The study evaluates vindesine population pharmacokinetics, but no numeric disposition parameter values are included in the evidence. |

<sub>queue written 2026-10-06T15:09:49.065188+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ibrahim_2023 | not_relevant | 0 | 0 | The study models vindesine binding to ABCB1 but does not report a gene variant, genotype, or phenotype effect on a vindesine PK or PD parameter. |
| popPK | Merighi_2003 | irrelevant | 0 | 0 | This is an in-vitro cell-sensitization study and reports no quantitative vindesine disposition parameters. |
| PGx | Sinha_2003 | not_relevant | 0 | 0 | The study examines proteomic differences associated with melanoma cell-line chemoresistance, not a pharmacogenomic effect on a vindesine PK or PD parameter. |
| PGx | Takigawa_2008 | not_relevant | 0 | 0 | The text reports an MDR1 haplotype association with vincristine elimination half-life, but no genotype-related PK or PD effect for vindesine. |
| popPK | Toso_1995 | irrelevant | 0 | 0 | This review concerns vinorelbine; vindesine is only mentioned as a clinical comparator, with no vindesine PK parameter values. |
| PGx | Tsuruo_1981 | not_relevant | 0 | 0 | The paper compares vindesine sensitivity across tumor cell populations but does not report a gene variant, genotype, or phenotype effect on a PK or PD parameter. |
| PGx | Zhou-Pan_1993 | not_relevant | 0 | 0 | The paper studies vinblastine metabolism and mentions vindesine only as an inhibitor; it reports no pharmacogenomic effect on a vindesine PK or PD parameter. |
| PGx | Zhou_2018 | not_relevant | 2 | 10 | CYP3A5 *3/*3 is proposed to contribute to vindesine accumulation and toxicity, but no pharmacokinetic or pharmacodynamic parameter is reported. |
| popPK | Zhu_2014 | relevant | 9 | 0 | The study evaluates vindesine population pharmacokinetics, but no numeric disposition parameter values are included in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 15:10 UTC</sub>
