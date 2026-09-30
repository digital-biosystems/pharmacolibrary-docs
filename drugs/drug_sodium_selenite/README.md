<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;sodium selenite&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumSelenite_Guo1991_reference&quot;,&quot;label&quot;:&quot;Guo_1991_reference&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_selenite/SodiumSelenite_Guo1991_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Jayachandran2021_reference&quot;,&quot;label&quot;:&quot;Jayachandran_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_selenite/SodiumSelenite_Jayachandran2021_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Zheng2019_reference&quot;,&quot;label&quot;:&quot;Zheng_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_selenite/SodiumSelenite_Zheng2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# sodium selenite

- **generic name:** sodium selenite
- **ATC codes:** `A12CE02`, `B05XA20`
- **DrugBank:** [DB11127](https://go.drugbank.com/drugs/DB11127) · **PubChem:** [CID 1091](https://pubchem.ncbi.nlm.nih.gov/compound/1091)
- **molar mass:** 128.97 g/mol (H2O3Se) — DrugBank
- **groups:** approved

## About

**Description.** Selenious acid is the acid form of sodium selenite, a form of selenium [L1910].

Selenium is an essential trace element and antioxidant. It is a cofactor metabolic enzyme regulation. It also plays an important role in maintaining the general health of tissue and muscle and has antioxidant properties. Selenium is a component of glutathione peroxidase enzyme, which protects cell components from oxidative damage due to peroxides produced during cellular metabolism [L1916].

Selenium (Se) has been demonstrated to prevent cancer in numerous animal models when administered selenium at levels exceeding the nutritional requirements. One study showed efficacy in the prevention of malignancy while utilizing a selenium supplement in humans. The reports from such studies have heightened the interest in additional human selenium supplementation studies to validate the results in larger populations [L1918].

Interestingly, selenium is being studied as a potential therapy in the prevention or management of atherosclerosis [L1921].

**Indication.** Selenium injection is indicated for use as a supplement to intravenous solutions given for total parenteral nutrition (TPN). Administration of selenious acid in TPN formulas helps to maintain plasma selenium levels and also to maintain endogenous stores to prevent deficiency [L1922].

Selenium compounds, such as selenium sulfide, are used topically in anti-dandruff shampoos and in cases of seborrhea [L1916]. 
 
For the purpose of brevity, selenite will the focus of discussion, and more information about selenium can be obtained at [DB11135].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-26 16:57 | 5:51 | 1/1/1 | 0/0/0 | 0/0/0 | 58,760/20,090 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q20 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Guo_1991_reference](drugs/drug_sodium_selenite/SodiumSelenite_Guo1991_reference.md) | — | 1-compartment (no model) | 8 | Guo JA et al., [Pharmacokinetics of sodium selenite in…, Zhongguo yao li xue bao = A… (1991) | — |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.636). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Jayachandran_2021_reference](drugs/drug_sodium_selenite/SodiumSelenite_Jayachandran2021_reference.md) | held back | 1-compartment, oral | 3 | Jayachandran P et al., Clinical Pharmacokinetics of Oral Sodiu…, Drugs in R&D (2021) | [10.1007/s40268-021-00340-9](https://doi.org/10.1007/s40268-021-00340-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Zheng_2019_reference](drugs/drug_sodium_selenite/SodiumSelenite_Zheng2019_reference.md) | — | 1-compartment (no model) | 3 | Zheng S et al., Pharmacokinetics of Sodium Selenite Adm…, Biological trace element re… (2019) | [10.1007/s12011-018-1567-8](https://doi.org/10.1007/s12011-018-1567-8) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sodium_selenite) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>“…more toxic than selenous acid (H2SeO3). [A32294]. The liver is the central organ for selen…”</sub> | prose |
| excretion | bile duct | <sub>“…e urine. However, significant endogenous losses through the feces can also occur [L1984].…”</sub> | prose |
| excretion | kidney | <sub>“…Selenium is eliminated mainly in the urine. However, significant endogenous losses through…”</sub> | prose |
| excretion | lung | <sub>“…te of administration. Other minor routes of elimination are lungs and skin [L1922]. Analys…”</sub> | prose |
| excretion | skin | <sub>“…nistration. Other minor routes of elimination are lungs and skin [L1922]. Analysis of 72-h…”</sub> | prose |

<sub>Actors without a tissue in the table: GPX1 (activator), SELENOP (transporter), TXNRD1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guo_1991.pdf` | Guo JA et al., [Pharmacokinetics of sodium selenite in…, Zhongguo yao li xue bao = A… (1991) | popPK | 10 | not captured | [1664167](https://pubmed.ncbi.nlm.nih.gov/1664167) | The paper reports a human PK study for sodium selenite with explicit numeric values for clearance, volume, half-life, and absorption rate in the text. |
| `Zeng_2020.pdf` | Zeng X et al., Pharmacokinetics of Sodium Selenite in…, Biological trace element re… (2020) | popPK | 10 | [10.1007/s12011-019-01928-8](https://doi.org/10.1007/s12011-019-01928-8) | [31656014](https://pubmed.ncbi.nlm.nih.gov/31656014) | The paper is a direct pharmacokinetic study of sodium selenite in rats reporting compartmental models, but the specific numeric parameter values are not present in the provided evidence text. |
| `Zheng_2019.pdf` | Zheng S et al., Pharmacokinetics of Sodium Selenite Adm…, Biological trace element re… (2019) | popPK | 10 | [10.1007/s12011-018-1567-8](https://doi.org/10.1007/s12011-018-1567-8) | [30465172](https://pubmed.ncbi.nlm.nih.gov/30465172) | The study reports quantitative pharmacokinetic parameters (half-lives, Tmax, dosing intervals) for sodium selenite in ducklings, with specific numeric values provided in the text. |

<sub>queue written 2026-09-26T16:51:34.389437+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Zeng_2020 | relevant | 10 | 0 | The paper is a direct pharmacokinetic study of sodium selenite in rats reporting compartmental models, but the specific numeric parameter values are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-26 16:51 UTC</sub>
