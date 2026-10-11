<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;mizolastine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mizolastine_Mentr2001_reference&quot;,&quot;label&quot;:&quot;Mentr\u00e9_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mizolastine/Mizolastine_Mentr2001_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# mizolastine

- **generic name:** mizolastine
- **ATC codes:** `R06AX25`
- **DrugBank:** [DB12523](https://go.drugbank.com/drugs/DB12523) · **PubChem:** [CID 65906](https://pubchem.ncbi.nlm.nih.gov/compound/65906)
- **molar mass:** 432.503 g/mol (C24H25FN6O) — DrugBank
- **groups:** approved

## About

Mizolastine is a non-sedating antihistamine used to relieve symptoms of allergic conditions such as allergic rhinitis and hives. It is an approved medicine that has been used mainly in European countries, though it is not authorised across the whole European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417830](https://www.wikidata.org/wiki/Q417830) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mizolastine | parent | 432.503 | C24H25FN6O | DrugBank | [65906](https://pubchem.ncbi.nlm.nih.gov/compound/65906) | Mentré_2001, Mesnil_1997 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:32 | 1:16 | 1/1/0 | 1/0/0 | 0/0/0 | 34,891/3,524 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Mentré_2001_reference](drugs/drug_mizolastine/Mizolastine_Mentr2001_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Mentré F et al., Population pharmacokinetic analysis and…, Journal of pharmacokinetics… (2001) | [10.1023/a:1011583210549](https://doi.org/10.1023/a:1011583210549) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Mesnil_1997_reference](drugs/drug_mizolastine/Mizolastine_Mesnil1997_reference.md) | — | 1-compartment (no model) | 3 | Mesnil F et al., Pharmacokinetic analysis of mizolastine…, Journal of pharmacokinetics… (1997) | [10.1023/a:1025775912051](https://doi.org/10.1023/a:1025775912051) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Deschamps_2000_flare](drugs/drug_mizolastine/pd_Deschamps_2000_flare.md) | flare ← mizolastine · indirect response — drug inhibits the production of flare | model (no simulator) | Deschamps C et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2000) | [10.1067/mcp.2000.112341](https://doi.org/10.1067/mcp.2000.112341) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Deschamps_2000_wheal](drugs/drug_mizolastine/pd_Deschamps_2000_wheal.md) | wheal ← mizolastine · indirect response — drug inhibits the production of wheal | model (no simulator) | Deschamps C et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2000) | [10.1067/mcp.2000.112341](https://doi.org/10.1067/mcp.2000.112341) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mizolastine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mentré_2001.pdf` | Mentré F et al., Population pharmacokinetic analysis and…, Journal of pharmacokinetics… (2001) | popPK | 10 | [10.1023/a:1011583210549](https://doi.org/10.1023/a:1011583210549) | [11468942](https://pubmed.ncbi.nlm.nih.gov/11468942) | The paper reports specific quantitative population PK parameters (Vc/F, CL/F, lambdas, Tabs) for mizolastine in children within the text. |
| `Mesnil_1997.pdf` | Mesnil F et al., Pharmacokinetic analysis of mizolastine…, Journal of pharmacokinetics… (1997) | popPK | 10 | [10.1023/a:1025775912051](https://doi.org/10.1023/a:1025775912051) | [9408856](https://pubmed.ncbi.nlm.nih.gov/9408856) | The paper reports specific numeric pharmacokinetic parameters (CL, Vd, t1/2, absorption duration) for mizolastine in humans directly in the text. |
| `Mesnil_1998.pdf` | Mesnil F et al., Population pharmacokinetic analysis of…, Journal of pharmacokinetics… (1998) | popPK | 10 | [10.1023/a:1020505722924](https://doi.org/10.1023/a:1020505722924) | [9795879](https://pubmed.ncbi.nlm.nih.gov/9795879) | The paper describes a population PK model for mizolastine, but the evidence text only contains qualitative descriptions and validation statistics (SPE mean/variance) without the specific numeric values for clearance, volume, or rate constants. |
| `Deschamps_2000.pdf` | Deschamps C et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2000) | popPK | 9 | [10.1067/mcp.2000.112341](https://doi.org/10.1067/mcp.2000.112341) | [11180025](https://pubmed.ncbi.nlm.nih.gov/11180025) | The paper describes a two-compartment PK model for mizolastine, but the specific numeric disposition parameters (CL, V, ka) are not listed in the abstract evidence provided, which only reports pharmacodynamic values. |
| `Li_2018.pdf` | Li P et al., Effects of UGT1A1, CYP3A5 and ABCB1 Gen…, Basic & clinical pharmacolo… (2018) | pgx | 8 | [10.1111/bcpt.13028](https://doi.org/10.1111/bcpt.13028) | [29702735](https://www.ncbi.nlm.nih.gov/pubmed/29702735) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Nicolas_1999.pdf` | Nicolas JM et al., In vitro inhibition of human liver drug…, Chemico-biological interact… (1999) | pgx | 7 | [10.1016/s0009-2797(99)00131-3](https://doi.org/10.1016/s0009-2797(99)00131-3) | [10597902](https://www.ncbi.nlm.nih.gov/pubmed/10597902) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-07T21:32:31.114304+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Broccatelli_2010 | not_relevant | 2 | 0 | The paper predicts transporter-mediated efflux for mizolastine based on physicochemical properties and side effect incidence, but does not report observed pharmacogenomic (genetic variant) effects on PK or PD parameters. |
| PGx | Cataldi_2019 | not_relevant | 0 | 0 | The paper is a review on the cardiac safety (hERG channel blockade) of antihistamines at up-dosed levels and does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Desager_1995 | irrelevant | 2 | 0 | This is a review article discussing pharmacokinetic-pharmacodynamic relationships generally, and the specific quantitative disposition parameters for mizolastine are not present in the provided text. |
| popPK | Deschamps_2000 | relevant | 9 | 3 | The paper describes a two-compartment PK model for mizolastine, but the specific numeric disposition parameters (CL, V, ka) are not listed in the abstract evidence provided, which only reports pharmacodynamic values. |
| PGx | Guo_2015 | not_relevant | 4 | 5 | The paper reports an association between FCER1A genotypes and clinical efficacy (UAS7) for a group of H1-antihistamines, but does not isolate mizolastine's PK/PD parameters or provide fitted effect sizes for mizolastine specifically. |
| popPK | Mesnil_1998 | relevant | 10 | 2 | The paper describes a population PK model for mizolastine, but the evidence text only contains qualitative descriptions and validation statistics (SPE mean/variance) without the specific numeric values for clearance, volume, or rate constants. |
| PGx | Nicolas_1999 | not_relevant | 0 | 0 | The study reports in vitro enzyme inhibition by mizolastine but does not investigate any pharmacogenomic (genetic) effects on its pharmacokinetics or pharmacodynamics. |
| PGx | Reichmuth_2000 | not_relevant | 0 | 0 | The paper is a general review of allergic rhinitis therapies and does not report specific pharmacogenomic studies or gene-variant effects on mizolastine PK/PD. |
| popPK | Triggiani_2004 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on mediator release from cells, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Yan_2018 | not_relevant | 3 | 5 | The study finds no pharmacogenomic association for mizolastine, only for desloratadine. |
| popPK | Zhou_2009 | irrelevant | 0 | 0 | The paper describes the biological activity of mizolastine on marine invertebrates (anti-settlement) and does not contain pharmacokinetic data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:32 UTC</sub>
