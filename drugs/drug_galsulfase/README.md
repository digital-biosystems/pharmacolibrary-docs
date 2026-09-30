<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;galsulfase&quot;}]"></div>

# galsulfase

- **generic name:** galsulfase
- **ATC codes:** `A16AB08`
- **DrugBank:** [DB01279](https://go.drugbank.com/drugs/DB01279) · **PubChem:** not captured
- **groups:** approved, investigational

## About

**Description.** Galsufase is a variant form of the polymorphic human enzyme N-acetylgalactosamine 4-sulfatase of recombinant DNA origin. Galsulfase is a glycoprotein with a molecular weight of approximately 56 kD. The recombinant protein is comprised of 495 amino acids and contains six asparagine-linked glycosylation sites, four of which carry a bis mannose-6-phosphate manose7 oligosaccharide for specific cellular recognition. Post-translational modification of Cys53 produces the catalytic amino acid residue Ca-formylglycine, which is required for enzyme activity and is conserved in all members of the sulfatase enzyme family.

**Indication.** For the treatment of adults and children with Mucopolysaccharidosis VI.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 08:15 | 3:06 | 0/0/0 | 0/1/0 | 0/0/0 | 13,959/2,938 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Qi_2019_uCS](drugs/drug_galsulfase/pd_Qi_2019_uCS.md) | urinary chondroitin sulfate ← vestronidase alfa · direct Emax (saturable) effect | — | Qi Y et al., Pharmacokinetic and Pharmacodynamic Mod…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0721-y](https://doi.org/10.1007/s40262-018-0721-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Qi_2019_uDS](drugs/drug_galsulfase/pd_Qi_2019_uDS.md) | urinary dermatan sulfate ← vestronidase alfa · direct Emax (saturable) effect | — | Qi Y et al., Pharmacokinetic and Pharmacodynamic Mod…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0721-y](https://doi.org/10.1007/s40262-018-0721-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=galsulfase) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ARSB (modulator), Dermatan sulfate (aggregation inhibitor), Dermatan sulfate (cleavage).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jones_1998.pdf` | Jones MZ et al., Recombinant caprine 3H-[N-acetylglucosa…, Journal of molecular neuros… (1998) | popPK | 10 | [10.1385/JMN:11:3:223](https://doi.org/10.1385/JMN:11:3:223) | [10344792](https://pubmed.ncbi.nlm.nih.gov/10344792) | The paper reports quantitative pharmacokinetic parameters (half-lives) for human N-acetylgalactosamine-4-sulfatase (galsulfase) in rats. |
| `Ruane_2016.pdf` | Ruane T et al., Pharmacodynamics, pharmacokinetics and…, Molecular genetics and meta… (2016) | popPK | 8 | [10.1016/j.ymgme.2015.10.006](https://doi.org/10.1016/j.ymgme.2015.10.006) | [26776148](https://pubmed.ncbi.nlm.nih.gov/26776148) | The study reports PK parameters (AUC, Cmax) for galsulfase in cats, but specific numeric values are not provided in the text, only relative comparisons. |

<sub>queue written 2026-09-27T08:14:48.820220+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auclair_2006 | irrelevant | 1 | 0 | The study focuses on intra-articular efficacy in feline MPS VI and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for galsulfase. |
| popPK | Auclair_2007 | irrelevant | 0 | 0 | The study focuses on the efficacy of intra-articular administration in feline MPS VI and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for galsulfase. |
| popPK | Baldo_2015 | irrelevant | 0 | 0 | The paper is a review of approved enzymes and their mechanisms/adverse effects, containing no original pharmacokinetic data or quantitative disposition parameters for galsulfase. |
| popPK | Brands_2013 | irrelevant | 0 | 0 | The paper focuses on genotype-phenotype correlations and antibody response to galsulfase, not on pharmacokinetic disposition parameters. |
| PD | Brands_2013 | not_relevant | 2 | 1 | The paper focuses on genotype-phenotype correlations and immunogenicity (antibody titers and in vitro inhibition), but does not report a pharmacodynamic exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for galsulfase. |
| popPK | Harper_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of lysosomal sulfate efflux and does not report pharmacokinetic parameters for galsulfase. |
| popPK | Qi_2019 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for vestronidase alfa, not galsulfase. |
| popPK | Ruane_2016 | relevant | 8 | 2 | The study reports PK parameters (AUC, Cmax) for galsulfase in cats, but specific numeric values are not provided in the text, only relative comparisons. |
| PD | Ruane_2016 | not_relevant | 2 | 1 | The study compares PK and PD outcomes between two infusion durations but reports no concentration-effect or dose-response modeling, nor any numeric PD parameters (e.g., Emax, EC50). |
| popPK | White_2008 | irrelevant | 0 | 0 | The paper describes in-vitro neutralizing antibody assays for galsulfase and does not report any pharmacokinetic disposition parameters. |
| PD | White_2008 | not_relevant | 0 | 0 | The paper describes the development and comparison of in vitro neutralizing antibody assays for galsulfase, but does not report any pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters. |
| popPK | White_2008_2 | irrelevant | 0 | 0 | The paper describes an immunoassay for measuring antibody response to galsulfase and contains no pharmacokinetic parameters. |
| popPK | unknown_2005 | irrelevant | 2 | 0 | The text is a regulatory and clinical trial overview that mentions pharmacokinetics were evaluated but does not provide any quantitative PK parameter values (CL, V, t1/2, etc.). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
