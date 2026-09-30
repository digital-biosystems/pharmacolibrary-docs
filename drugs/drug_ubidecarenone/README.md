<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;ubidecarenone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ubidecarenone_Tomono1986_reference&quot;,&quot;label&quot;:&quot;Tomono_1986_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ubidecarenone/Ubidecarenone_Tomono1986_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# ubidecarenone

- **generic name:** ubidecarenone
- **ATC codes:** `C01EB09`
- **DrugBank:** [DB09270](https://go.drugbank.com/drugs/DB09270) · **PubChem:** [CID 5281915](https://pubchem.ncbi.nlm.nih.gov/compound/5281915)
- **molar mass:** 863.3435 g/mol (C59H90O4) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

**Description.** Ubidecarenone, also called coenzyme Q10, is a 1,4-benzoquinone. From its name (Q10), the Q refers to the constitutive quinone group, and 10 is related to the number of isoprenyl subunits in its tail.[A7874] It is a powerful antioxidant, a lipid-soluble and essential cofactor in mitochondrial oxidative phosphorylation.[A31413] The ubidecarenone is the coenzyme destined for mitochondrial enzyme complexes involved in oxidative phosphorylation in the production of ATP. It is fundamental for cells that have a high metabolic demand.[L1062] Ubidecarenone is sold as a dietary supplement and is not FDA approved as a drug - it is not meant to treat, cure or prevent any disease. FDA does not approve this dietary supplements before sold nor regulate the manufacturing process.[L1063]

**Indication.** The diet supplements containing ubidecarenone are indicated, as stated in the product label, to assist individuals with cardiovascular complaints including congestive heart failure and systolic hypertension. In the product, ubidecarenone is used to increase the cardiac input as well as for the prevention of several other diseases like Parkinson, fibromyalgia, migraine, periodontal disease and diabetes, based on preclinical studies.[L1064] It is important to highlight that these products are not FDA approved and it is recommended to use under discretion.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| coenzyme Q10 (ubidecarenone) | parent | 863.343 | C59H90O4 | DrugBank | [5281915](https://pubchem.ncbi.nlm.nih.gov/compound/5281915) | Tomono_1986 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 05:08 | 1:09 | 0/1/0 | 0/0/0 | 0/0/0 | 6,828/3,670 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 2/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.1). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Tomono_1986_reference](drugs/drug_ubidecarenone/Ubidecarenone_Tomono1986_reference.md) | — | 1-compartment (no model) | 2 | Tomono Y et al., Pharmacokinetic study of deuterium-labe…, International journal of cl… (1986) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ubidecarenone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | stomach | <sub>“…e food. The absorption is lower in the presence of an empty stomach and greater in presenc…”</sub> | prose |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | kidney | <sub>“…the phosphorylation in the cells and transportation to the kidneys for further excretion b…”</sub> | prose |
| excretion | bile duct | <sub>“…The main elimination route of ubidecarenone is through the bile. After its oral administra…”</sub> | prose |
| excretion | kidney | <sub>“…a small fraction of the metabolites.[L1065, A31416] In the urine, ubidecarenone is bound t…”</sub> | prose |

<sub>Actors without a tissue in the table: HMGCR (substrate), LDLR (substrate), NDUFV3 (cofactor), SDHA (cofactor), VLDLR (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 81 matched, 21 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tomono_1986.pdf` | Tomono Y et al., Pharmacokinetic study of deuterium-labe…, International journal of cl… (1986) | popPK | 10 | not captured | [3781673](https://pubmed.ncbi.nlm.nih.gov/3781673) | The study reports quantitative PK parameters (Cmax, Tmax, t1/2) for coenzyme Q10 (ubidecarenone) in humans, with values explicitly present in the text. |
| `Zhou_1998.pdf` | Zhou Q et al., Accuracy of repeated blood sampling in…, Journal of pharmacological… (1998) | pd | 5 | [10.1016/s1056-8719(99)00005-2](https://doi.org/10.1016/s1056-8719(99)00005-2) | [10465153](https://www.ncbi.nlm.nih.gov/pubmed/10465153) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-09-30T05:06:59.617646+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adhikary_2026 | irrelevant | 0 | 0 | The paper is a narrative review of quinones (including CoQ10/ubidecarenone) in diabetes and does not report original quantitative pharmacokinetic parameters. |
| popPK | Bhandari_2026 | irrelevant | 0 | 0 | The paper is a review of nanocarriers for Multiple Sclerosis and does not report quantitative pharmacokinetic parameters for ubidecarenone. |
| popPK | Bliznakov_1973 | irrelevant | 0 | 0 | The paper is an immunological/toxicology study on tumor and infection outcomes in mice, reporting no pharmacokinetic parameters for ubidecarenone. |
| popPK | Chou_2023 | irrelevant | 0 | 0 | The study focuses on the in-vitro antioxidant and wound-healing properties of acemannan, with CoQ10 (ubidecarenone) serving only as a comparator in radical clearance assays, and no pharmacokinetic parameters are reported. |
| popPK | Folkers_1993 | irrelevant | 0 | 0 | The paper is a clinical case report/review on cancer survival and immune effects, containing no pharmacokinetic parameters or quantitative disposition data for ubidecarenone. |
| popPK | Iwamoto_1991 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of polysaccharide-coated oil droplets (the carrier) using coenzyme Q10 only as a radiolabeled marker, and no quantitative PK parameters for the drug itself are reported. |
| popPK | Khalifa_2020 | irrelevant | 0 | 0 | The study is a mechanistic/toxicology experiment in rats assessing nephroprotection, not a pharmacokinetic study, and reports no PK parameters for ubidecarenone. |
| popPK | Kitajima_1991 | irrelevant | 0 | 0 | The study investigates gastric microcirculation and the role of CoQ10 (ubidecarenone) as a vascular regulating factor in rats, not its pharmacokinetic disposition parameters. |
| popPK | Kose_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial function in Cockayne syndrome fibroblasts and does not report pharmacokinetic parameters for ubidecarenone. |
| popPK | Lei_2026 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| PD | Luo_2022 | not_relevant | 0 | 0 | The paper studies Mogroside V, not ubidecarenone (CoQ10), and does not report a quantitative exposure-response or dose-response model with numeric PD parameters for the target drug. |
| popPK | Nilsson_2022 | irrelevant | 0 | 0 | The study focuses on nutritional co-therapy and autophagic clearance in Pompe disease, with no pharmacokinetic parameters reported for ubidecarenone. |
| popPK | Porta_2026 | irrelevant | 0 | 0 | The study is a physiological investigation of blood pressure and renal function in rats, not a pharmacokinetic study, and reports no disposition parameters for ubidecarenone. |
| popPK | Sato_1988 | irrelevant | 0 | 0 | The study focuses on histological and functional recovery of hearing loss in guinea pigs and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for ubidecarenone. |
| popPK | Uner_2024 | irrelevant | 1 | 0 | The study focuses on in-vitro cellular uptake and formulation characterization of CoQ10 micelles, not on quantitative population pharmacokinetic parameters (CL, V, etc.) for ubidecarenone. |
| popPK | Yasumoto_1986 | irrelevant | 0 | 0 | The study focuses on the physiological effects of coenzyme Q10 (ubidecarenone) on endotoxin shock in dogs and does not report any pharmacokinetic parameters. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | The paper is a mechanistic review of mitochondrial dysfunction in sepsis and does not report any pharmacokinetic parameters for ubidecarenone. |
| popPK | Zhou_1998 | irrelevant | 0 | 0 | no_text gate: only 165 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 18:45 UTC</sub>
