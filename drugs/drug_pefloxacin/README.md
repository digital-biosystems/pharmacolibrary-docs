<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;pefloxacin&quot;}]"></div>

# pefloxacin

- **generic name:** pefloxacin
- **ATC codes:** `J01MA03`
- **DrugBank:** [DB00487](https://go.drugbank.com/drugs/DB00487) · **PubChem:** [CID 51081](https://pubchem.ncbi.nlm.nih.gov/compound/51081)
- **molar mass:** 333.3574 g/mol (C17H20FN3O3) — DrugBank
- **groups:** approved

## About

Pefloxacin is a fluoroquinolone antibiotic used to treat bacterial infections. It is an approved antibacterial for systemic use, though it is not authorised in the European Union and is used only in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2601859](https://www.wikidata.org/wiki/Q2601859) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pefloxacin | parent | 333.357 | C17H20FN3O3 | DrugBank | [51081](https://pubchem.ncbi.nlm.nih.gov/compound/51081) | Bruno_1991, Bruno_1992, Malik_2002, Martínez_2017, Pant_2005 |
| N-demethyl pefloxacin (norfloxacin) | metabolite | 319.336 | C16H18FN3O3 | PubChem | [4539](https://pubchem.ncbi.nlm.nih.gov/compound/4539) | Martínez_2017, Pant_2005 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:52 | 6:51 | 0/4/2 | 0/0/0 | 0/0/0 | 110,627/45,396 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Bruno_1992_reference](drugs/drug_pefloxacin/Pefloxacin_Bruno1992_reference.md) | — | 1-compartment (no model) | 1 | Bruno R et al., Evaluation of Bayesian estimation in co…, Journal of pharmacokinetics… (1992) | [10.1007/BF01064424](https://doi.org/10.1007/BF01064424) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">goat</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Malik_2002_reference](drugs/drug_pefloxacin/Pefloxacin_Malik2002_reference.md) | — | 1-compartment (no model) | 11 | Malik JK et al., Pharmacokinetics of pefloxacin in goats…, Veterinary research communi… (2002) | [10.1023/a:1014047702196](https://doi.org/10.1023/a:1014047702196) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Bruno_1991_reference](drugs/drug_pefloxacin/Pefloxacin_Bruno1991_reference.md) | — | 1-compartment (no model) | 1 | Bruno R et al., Evaluation of Bayesian estimation to di…, European journal of drug me… (1991) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Martínez_2017_iv](drugs/drug_pefloxacin/Pefloxacin_Martnez2017_iv.md) | — | parent + metabolite (no model) | 12 | Martínez MA et al., Oral Bioavailability and Plasma Disposi…, Frontiers in veterinary sci… (2017) | [10.3389/fvets.2017.00077](https://doi.org/10.3389/fvets.2017.00077) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Martínez_2017_oral](drugs/drug_pefloxacin/Pefloxacin_Martnez2017_oral.md) | — | parent + metabolite (no model) | 16 | Martínez MA et al., Oral Bioavailability and Plasma Disposi…, Frontiers in veterinary sci… (2017) | [10.3389/fvets.2017.00077](https://doi.org/10.3389/fvets.2017.00077) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Pant_2005_reference](drugs/drug_pefloxacin/Pefloxacin_Pant2005_reference.md) | — | parent + metabolite (no model) | 8 | Pant S et al., Pharmacokinetics and tissue residues of…, British poultry science (2005) | [10.1080/00071660500255323](https://doi.org/10.1080/00071660500255323) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pefloxacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: TOP2A (inhibitor), TOP2B (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 6  ·  extracted 0  ·  needs_review 2  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abd_2002.pdf` | Abd El-Aty AM et al., Some pharmacokinetic parameters of pefl…, Veterinary research communi… (2002) | popPK | 10 | [10.1023/a:1020243615928](https://doi.org/10.1023/a:1020243615928) | [12416870](https://pubmed.ncbi.nlm.nih.gov/12416870) | The study reports quantitative compartmental PK parameters (CL, Vd, t1/2) for pefloxacin in goats with values clearly presented in the evidence. |
| `Bruno_1991.pdf` | Bruno R et al., Evaluation of Bayesian estimation to di…, European journal of drug me… (1991) | popPK | 10 | not captured | [1820906](https://pubmed.ncbi.nlm.nih.gov/1820906) | The abstract provides specific numeric values for pefloxacin's half-life in renal/hepatic impairment and healthy volunteers, and describes a two-compartment model with reported clearance and volume of distribution metrics. |
| `Bruno_1992.pdf` | Bruno R et al., Evaluation of Bayesian estimation in co…, Journal of pharmacokinetics… (1992) | popPK | 10 | [10.1007/BF01064424](https://doi.org/10.1007/BF01064424) | [1302767](https://pubmed.ncbi.nlm.nih.gov/1302767) | The paper reports specific quantitative population PK parameters for pefloxacin (e.g., median CL of 4.02 and 3.92 L/hr, effect sizes on CL) directly in the provided abstract text. |
| `Malik_2002.pdf` | Malik JK et al., Pharmacokinetics of pefloxacin in goats…, Veterinary research communi… (2002) | popPK | 10 | [10.1023/a:1014047702196](https://doi.org/10.1023/a:1014047702196) | [11922483](https://pubmed.ncbi.nlm.nih.gov/11922483) | The study explicitly reports quantitative pharmacokinetic parameters (CL, Vd, half-lives, bioavailability) for pefloxacin in goats with all numeric values present in the text. |
| `Pant_2005.pdf` | Pant S et al., Pharmacokinetics and tissue residues of…, British poultry science (2005) | popPK | 9 | [10.1080/00071660500255323](https://doi.org/10.1080/00071660500255323) | [16359117](https://pubmed.ncbi.nlm.nih.gov/16359117) | The paper reports quantitative PK parameters (half-life, MRT, Cmax) for pefloxacin in broiler chickens, explicitly describing a one-compartment model. |
| `Delon_1999.pdf` | Delon A et al., Pharmacokinetic-pharmacodynamic contrib…, Antimicrobial agents and ch… (1999) | popPK | 6 | [10.1128/AAC.43.6.1511](https://doi.org/10.1128/AAC.43.6.1511) | [10348785](https://pubmed.ncbi.nlm.nih.gov/10348785) | The study reports pharmacokinetic data (CSF-to-plasma ratios) for pefloxacin in rats, but no specific numeric disposition parameters (CL, V, ka, t1/2) are provided in the evidence. |

<sub>queue written 2026-10-07T11:46:21.413341+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Delon_1997 | irrelevant | 2 | 1 | The study is a PK-PD comparison focused on convulsant activity and reports plasma/CSF concentrations at specific endpoints rather than standard disposition parameters (CL, V, t1/2). |
| popPK | Delon_1999 | relevant | 6 | 0 | The study reports pharmacokinetic data (CSF-to-plasma ratios) for pefloxacin in rats, but no specific numeric disposition parameters (CL, V, ka, t1/2) are provided in the evidence. |
| popPK | Fantin_1991 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic parameters (Emax, P50, static dose) and in vivo activity correlations rather than quantitative pharmacokinetic parameters (CL, V, ka) for pefloxacin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:50 UTC</sub>
