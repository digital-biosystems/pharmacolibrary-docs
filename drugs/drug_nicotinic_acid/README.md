<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;nicotinic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;NicotinicAcid_Iwaki1996_reference&quot;,&quot;label&quot;:&quot;Iwaki_1996_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nicotinic_acid/NicotinicAcid_Iwaki1996_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;NicotinicAcid_Wu1989_reference&quot;,&quot;label&quot;:&quot;Wu_1989_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nicotinic_acid/NicotinicAcid_Wu1989_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# nicotinic acid

- **generic name:** nicotinic acid
- **ATC codes:** `C04AC01`, `C10AD02`, `C10BA01`
- **DrugBank:** [DB00627](https://go.drugbank.com/drugs/DB00627) · **PubChem:** [CID 938](https://pubchem.ncbi.nlm.nih.gov/compound/938)
- **molar mass:** 123.1094 g/mol (C6H5NO2) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

**Description.** Niacin is a B vitamin used to treat vitamin deficiencies as well as hyperlipidemia, dyslipidemia, hypertriglyceridemia, and to reduce the risk of myocardial infarctions.[L7550,L7553,L7556,L7559,L7562,L7565]

**Indication.** Niacin is indicated to prevent vitamin deficiencies in pediatric and adult patients receiving parenteral nutrition as part of multivitamin intravenous injections.[L7550,L7553,L7556,L7559] Niacin oral tablets are indicated as a monotherapy or in combination with simvastatin or lovastatin to treat primary hyperlipidemia and mixed dyslipidemia.[L7562,L7565] It can also be used to reduce the risk of nonfatal myocardial infarctions in patients with a history of myocardial infarction and hyperlipidemia.[L7562,L7565] Niacin is also indicated with bile acid binding resins to treat atherosclerosis in patients with coronary artery disease and hyperlipidemia or to treat primary hyperlipidemia.[L7562,L7565] Finally niacin is indicated to treat severe hypertriglyceridemia.[L7562,L7565]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nicotinic acid (nicotinic_acid) | parent | 123.109 | C6H5NO2 | DrugBank | [938](https://pubchem.ncbi.nlm.nih.gov/compound/938) | Iwaki_1996, Wu_1989 |
| nicotinuric acid | metabolite | 180.163 | C8H8N2O3 | PubChem | [68499](https://pubchem.ncbi.nlm.nih.gov/compound/68499) | Iwaki_1996 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 17:39 | 5:31 | 0/0/2 | 0/0/0 | 0/0/0 | 68,540/19,149 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Iwaki_1996_reference](drugs/drug_nicotinic_acid/NicotinicAcid_Iwaki1996_reference.md) | — | parent + metabolite (no model) | 3 | Iwaki M et al., Acute dose-dependent disposition studie…, Drug metabolism and disposi… (1996) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Wu_1989_reference](drugs/drug_nicotinic_acid/NicotinicAcid_Wu1989_reference.md) | — | 1-compartment (no model) | 4 | Wu Y et al., [Determination of aspirin and nicotinic…, Yao xue xue bao = Acta phar… (1989) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nicotinic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A5` inhibitor | DrugBank actor |
| absorption | liver | `SLCO2B1` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A5` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>“…carboxamide, and trigonelline have been identified in human urine.[A181541]…”</sub> | prose |
| metabolism | liver | `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | <sub>“…69.5% of a dose of niacin is recovered in urine.[A181556] 37.9% of the recovered dose was…”</sub> | prose |

<sub>Actors without a tissue in the table: DGAT2 (inhibitor), HCAR2 (target), HCAR3 (target), NNMT (binder), QPRT (binder), SERPINA7 (inhibitor), SLC16A1 (substrate), SLC16A3 (unknown), SLC5A8 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Iwaki_1996.pdf` | Iwaki M et al., Acute dose-dependent disposition studie…, Drug metabolism and disposi… (1996) | popPK | 10 | not captured | [8818575](https://pubmed.ncbi.nlm.nih.gov/8818575) | The study reports quantitative PK parameters (clearance, volume of distribution, protein binding) for nicotinic acid in rats, with specific numeric values provided in the text for binding fraction and urinary excretion ratios. |
| `Wu_1989.pdf` | Wu Y et al., [Determination of aspirin and nicotinic…, Yao xue xue bao = Acta phar… (1989) | popPK | 9 | not captured | [2609979](https://pubmed.ncbi.nlm.nih.gov/2609979) | The study reports quantitative pharmacokinetic parameters (T1/2 beta and AUC) for nicotinic acid in rabbits, with specific numeric values provided in the text. |

<sub>queue written 2026-09-28T17:34:23.943292+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Leander_2015 | relevant | 9 | 2 | The paper is a population PK study of nicotinic acid in rats, but the specific numeric parameter estimates are not present in the provided text (likely in tables or figures not included). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 17:34 UTC</sub>
