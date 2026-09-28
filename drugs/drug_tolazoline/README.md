<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;tolazoline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tolazoline_Casbeer2013_reference&quot;,&quot;label&quot;:&quot;Casbeer_2013_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tolazoline/Tolazoline_Casbeer2013_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tolazoline

- **generic name:** tolazoline
- **ATC codes:** `C04AB02`, `M02AX02`
- **DrugBank:** [DB00797](https://go.drugbank.com/drugs/DB00797) · **PubChem:** [CID 5504](https://pubchem.ncbi.nlm.nih.gov/compound/5504)
- **molar mass:** 160.2157 g/mol (C10H12N2) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

**Description.** A vasodilator that apparently has direct actions on blood vessels and also increases cardiac output. Tolazoline can interact to some degree with histamine, adrenergic, and cholinergic receptors, but the mechanisms of its therapeutic effects are not clear. It is used in treatment of persistent pulmonary hypertension of the newborn.

**Indication.** For the treatment of pulmonary artery anomalies

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tolazoline | parent | 160.216 | C10H12N2 | DrugBank | [5504](https://pubchem.ncbi.nlm.nih.gov/compound/5504) | Casbeer_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 17:18 | 4:07 | 1/0/0 | 0/0/0 | 0/0/0 | 26,765/4,281 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span> | [Casbeer_2013_reference](drugs/drug_tolazoline/Tolazoline_Casbeer2013_reference.md) | 1-compartment, IV | 3 | Casbeer HC et al., Pharmacokinetics and pharmacodynamic ef…, Veterinary journal (London,… (2013) | [10.1016/j.tvjl.2012.12.006](https://doi.org/10.1016/j.tvjl.2012.12.006) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tolazoline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), ADRA2B (binder), ADRA2C (binder), DRD2 (target), HRH1 (target), HRH2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Casbeer_2013.pdf` | Casbeer HC et al., Pharmacokinetics and pharmacodynamic ef…, Veterinary journal (London,… (2013) | popPK | 10 | [10.1016/j.tvjl.2012.12.006](https://doi.org/10.1016/j.tvjl.2012.12.006) | [23321455](https://pubmed.ncbi.nlm.nih.gov/23321455) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for tolazoline in horses, with all numeric values explicitly present in the text. |

<sub>queue written 2026-09-28T17:17:03.510541+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baños_1988 | irrelevant | 0 | 0 | The study is a pharmacological investigation of adrenergic mechanisms in rat muscle tissue, not a pharmacokinetic study, and tolazoline is used only as a receptor antagonist probe. |
| popPK | Costa_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of adrenergic receptors and does not report any pharmacokinetic parameters for tolazoline. |
| popPK | Dunne_1991 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of channel blocking, not a pharmacokinetic study, and reports no disposition parameters for tolazoline. |
| PD | Dunne_1991 | not_relevant | 3 | 2 | The paper reports a qualitative observation that tolazoline blocks K+ATP channels at 25 microM, but provides no numeric PD parameters (like Ki or IC50) or dose-response curve for tolazoline, unlike the detailed analysis provided for phentolamine. |
| popPK | Fuder_1986 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor affinity and efficacy in perfused rat hearts, not a pharmacokinetic study, and reports no disposition parameters for tolazoline. |
| popPK | Ishikawa_1996 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of a different compound (IBI) in rabbit iris muscles and does not report pharmacokinetic parameters for tolazoline. |
| PD | Ishikawa_1996 | not_relevant | 0 | 0 | The paper investigates the pharmacology of isothiocyanatobenzyl imidazoline (IBI) and only qualitatively mentions tolazoline as a parent molecule without providing any PD data or parameters for tolazoline. |
| popPK | Lei_1998 | irrelevant | 0 | 0 | The paper is a mechanistic study on calcium channel activation and receptor binding, not a pharmacokinetic study, and reports no disposition parameters for tolazoline. |
| popPK | Rogers_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of vascular resistance in an ex vivo model, not a pharmacokinetic study reporting disposition parameters for tolazoline. |
| popPK | Williams_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lidocaine, with tolazoline used only as a co-administered vasoactive agent to modulate skin perfusion, not as the subject drug for PK parameter estimation. |
| PGx | Yan_2017 | not_relevant | 0 | 0 | The paper reports tolazoline as an inhibitor of CYP4Z1 in a recombinant yeast system, not a pharmacogenomic effect on tolazoline's PK/PD parameters. |
| popPK | Yoshida_2008 | irrelevant | 0 | 0 | Tolazoline is used as a vasoactive agent to modify the pharmacokinetics of model compounds (salicylate and FITC-dextran), not as the subject drug for PK parameter estimation. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 17:17 UTC</sub>
