<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;masoprocol&quot;}]"></div>

# masoprocol

- **generic name:** masoprocol
- **ATC codes:** `L01XX10`
- **DrugBank:** [DB00179](https://go.drugbank.com/drugs/DB00179) · **PubChem:** [CID 71398](https://pubchem.ncbi.nlm.nih.gov/compound/71398)
- **molar mass:** 302.3649 g/mol (C18H22O4) — DrugBank
- **groups:** investigational

## About

Masoprocol, also known as nordihydroguaiaretic acid, is an antineoplastic agent that has been studied for treating keratosis. It is not an approved medicine and remains an investigational drug, with no authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6783851](https://www.wikidata.org/wiki/Q6783851) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:47 | 2:14 | 0/0/0 | 1/4/0 | 0/0/0 | 347,039/6,968 | einfracz / qwen3.8-27b | 13 | 2/5 | 13/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yamamoto_1985_insulin](drugs/drug_masoprocol/pd_Yamamoto_1985_insulin.md) | insulin secretion ← nordihydroguaiaretic acid · inhibition effect | — | Yamamoto S et al., Lipoxygenase inhibitors and cyclic AMP-…, The Journal of pharmacology… (1985) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Folkerts_1989_PGE2](drugs/drug_masoprocol/pd_Folkerts_1989_PGE2.md) | prostaglandin E2 (PGE2) formation biomarker turnover ← nordihydroguaiaretic acid | — | Folkerts G et al., Endotoxin-induced hyperreactivity of th…, British journal of pharmaco… (1989) | [10.1111/j.1476-5381.1989.tb11829.x](https://doi.org/10.1111/j.1476-5381.1989.tb11829.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Gibson_1985_NK](drugs/drug_masoprocol/pd_Gibson_1985_NK.md) | natural killer (NK) activity ← NDGA · direct Emax (saturable) effect | — | Gibson PR et al., Sulphasalazine and derivatives, natural…, Clinical science (London, E… (1985) | [10.1042/cs0690177](https://doi.org/10.1042/cs0690177) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Moore_1991_12_HETE_production](drugs/drug_masoprocol/pd_Moore_1991_12_HETE_production.md) | 12-HETE production ← nordihydroguaiaretic acid · direct Emax (saturable) effect | — | Moore SA et al., Brain microvessel 12-hydroxyeicosatetra…, Journal of neurochemistry (1991) | [10.1111/j.1471-4159.1991.tb08239.x](https://doi.org/10.1111/j.1471-4159.1991.tb08239.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Walker_2002_3_H_thymidine_incorporation](drugs/drug_masoprocol/pd_Walker_2002_3_H_thymidine_incorporation.md) | PAEC growth ← nordihydroguaiaretic acid · direct Emax (saturable) effect | — | Walker JL et al., 5-Lipoxygenase and human pulmonary arte…, American journal of physiol… (2002) | [10.1152/ajpheart.00003.2001](https://doi.org/10.1152/ajpheart.00003.2001) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=masoprocol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ALOX5 (inhibitor), ERBB2 (modulator), SHBG (unknown), TRPM7 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 253 matched, 93 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adnan_2023 | irrelevant | 0 | 0 | The paper is a review on nanocarriers for skin cancer treatment and does not contain any data on the pharmacokinetics of masoprocol. |
| popPK | Aggarwal_2012 | irrelevant | 0 | 0 | The paper is a mechanistic study on rabbit aortic relaxation involving NO and 15-lipoxygenase, and does not involve the drug masoprocol. |
| popPK | Alzoghaibi_2004 | irrelevant | 0 | 0 | The paper investigates immunological mechanisms in intestinal smooth muscle cells and does not involve masoprocol or pharmacokinetic parameters. |
| popPK | Arteaga_2005 | irrelevant | 0 | 0 | The paper studies the pharmacology of Larrea tridentata in hamsters and does not mention or measure pharmacokinetic parameters for masoprocol. |
| popPK | Bass_1980 | irrelevant | 0 | 0 | The paper focuses on hexose transport in human polymorphonuclear leukocytes and does not involve masoprocol. |
| PGx | Basu_2004 | not_relevant | 0 | 0 | The paper focuses on UGT enzymes and general chemical uptake in the GI tract and does not mention masoprocol or pharmacogenomic effects on its specific PK/PD parameters. |
| popPK | Bellucci_2009 | irrelevant | 0 | 0 | The paper focuses on bradykinin B2 receptor antagonism in synovial fibroblasts and does not involve the drug masoprocol. |
| popPK | Bernardini_1990 | irrelevant | 0 | 0 | The paper studies TNF-alpha effects on the HPA axis in rats and does not involve masoprocol or its pharmacokinetics. |
| popPK | Bhardwaj_1988 | irrelevant | 0 | 0 | The paper studies endothelium-derived relaxing factor in rat blood vessels and does not involve masoprocol or its pharmacokinetics. |
| popPK | Borda_1984 | irrelevant | 0 | 0 | The paper describes in vitro inotropic/chronotropic effects of arachidonic acid and lymphocytes on rat atria and contains no pharmacokinetic data or mention of masoprocol. |
| popPK | Calixto_1991 | irrelevant | 0 | 0 | The paper investigates bradykinin mechanisms in guinea pig ileum and does not mention masoprocol. |
| popPK | Choi_2010 | irrelevant | 0 | 0 | The paper studies the mechanism of action of levobupivacaine in rat aorta and does not mention masoprocol or report any pharmacokinetic parameters. |
| PGx | Chong_1989 | not_relevant | 0 | 0 | The paper focuses on macrophage-mediated DNA strand breaks in tumor cells and does not discuss masoprocol, gene variants, or pharmacogenomics. |
| popPK | Colin_2024 | irrelevant | 0 | 0 | The paper is a review of Cassia alata bioactive compounds and does not contain any pharmacokinetic data for masoprocol. |
| popPK | Davenport_1992 | irrelevant | 0 | 0 | The paper studies in vitro neurotoxicity of methyl iodide and does not involve masoprocol or its pharmacokinetics. |
| popPK | Dveksler_1987 | irrelevant | 0 | 0 | The paper is a pharmacological study of eicosanoids on rat urinary bladder contractility and contains no data regarding masoprocol. |
| popPK | Eta_1991 | irrelevant | 0 | 0 | The paper is a pharmacodynamics study of endothelin and sarafotoxin on rat smooth muscle and contains no data regarding masoprocol. |
| popPK | Folkerts_1989 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of airway hyperreactivity and prostaglandin production in guinea pigs and does not study masoprocol pharmacokinetics. |
| popPK | Fulginiti_1993 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of endothelin-1 on rat gastric smooth muscle and does not involve masoprocol or pharmacokinetic parameters. |
| popPK | Gómez_2026 | irrelevant | 0 | 0 | The paper is a phytochemical and in vitro pharmacological study of *Larrea ameghinoi* extracts, unrelated to masoprocol pharmacokinetics. |
| popPK | Henry_1992 | irrelevant | 0 | 0 | The paper investigates endothelin-1 and carbachol effects in rat trachea and does not mention masoprocol or any pharmacokinetic parameters. |
| popPK | Huang_2004 | irrelevant | 0 | 0 | The paper studies the mechanism of action of nordihydroguaiaretic acid in prostate cancer cells and does not report pharmacokinetic parameters for masoprocol. |
| popPK | Hunt_1992 | irrelevant | 0 | 0 | The study examines in vitro effects of antioxidants on ornithine decarboxylase activity in T lymphocytes and contains no pharmacokinetic data for masoprocol. |
| PGx | Jeong_2017 | not_relevant | 0 | 0 | The paper studies the metabolism of Larrea nitida compounds, not masoprocol, and does not report any pharmacogenomic effects. |
| popPK | Juan_1986 | irrelevant | 0 | 0 | The study investigates the effect of eicosapentaenoic acid on vasoconstriction in rabbit ears and does not mention masoprocol or report pharmacokinetic parameters for it. |
| popPK | Knych_1987 | irrelevant | 0 | 0 | The paper investigates ethanol-induced contraction in rat aorta and is completely unrelated to masoprocol pharmacokinetics. |
| popPK | Ko_1997 | irrelevant | 0 | 0 | The study investigates calcium channels in rat spleen and does not mention masoprocol or perform pharmacokinetic analysis. |
| popPK | Kobayashi_1990 | irrelevant | 0 | 0 | The paper studies the effect of angiotensin II on ciliary motility in rabbit tracheal epithelium and does not mention masoprocol or report pharmacokinetic parameters. |
| popPK | Kubow_2000 | irrelevant | 0 | 0 | The paper studies the mechanism of action of all-trans-retinoic acid on mammary cell transformation and does not involve masoprocol or pharmacokinetic parameters. |
| popPK | Lin_2004 | irrelevant | 0 | 0 | The paper investigates the electrophysiological effects of caffeic acid phenethyl ester (CAPE) on ion channels in GH3 cells, not the pharmacokinetics of masoprocol. |
| popPK | McLean_2002 | irrelevant | 0 | 0 | The paper investigates protease-activated receptor-2 mechanisms in rat hearts and does not involve masoprocol or any pharmacokinetic parameters. |
| popPK | Minota_1997 | irrelevant | 0 | 0 | The study investigates the effects of arachidonic acid on nicotinic transmission in bullfrog neurons and does not involve masoprocol or pharmacokinetics. |
| popPK | Naor_1985 | irrelevant | 0 | 0 | The paper studies the mechanism of GnRH action on LH release in pituitary cells and does not involve masoprocol or its pharmacokinetics. |
| popPK | Ohashi_1986 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of KC-404 in isolated vessels and does not involve the drug masoprocol or its pharmacokinetics. |
| popPK | Ohta_2012 | irrelevant | 0 | 0 | The paper describes a uterotrophic assay for endocrine disruptors and does not study masoprocol pharmacokinetics. |
| popPK | Ono_2004 | irrelevant | 0 | 0 | The study investigates the in vitro anti-amyloidogenic effects of curcumin and rosmarinic acid, not the pharmacokinetics of masoprocol. |
| popPK | Ono_2004_2 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on tannic acid and Alzheimer's beta-amyloid, unrelated to masoprocol pharmacokinetics. |
| popPK | Pohl_1987 | irrelevant | 0 | 0 | The study investigates the effects of nitrocompounds (SNP and Teopranitol) on isolated rabbit arteries and does not involve masoprocol or any pharmacokinetic parameters. |
| popPK | Robison_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on rat alveolar macrophages and does not involve masoprocol or any pharmacokinetic parameters. |
| popPK | Schmidt_1989 | irrelevant | 0 | 0 | The paper studies the effect of calcium on EDRF formation and cGMP levels in bovine endothelial cells and does not mention masoprocol or its pharmacokinetics. |
| popPK | Seebeck_1998 | irrelevant | 0 | 0 | The study investigates PACAP signaling pathways in rat mast cells and contains no information about masoprocol. |
| popPK | Shore_1985 | irrelevant | 0 | 0 | The study investigates the modulation of histamine response in canine tracheal smooth muscle by prostaglandins and does not involve masoprocol or pharmacokinetic parameters. |
| popPK | Shore_1987 | irrelevant | 0 | 0 | The study investigates FMLP-induced lung contractions in guinea pigs using arachidonic acid metabolites, not the pharmacokinetics of masoprocol. |
| PGx | Sjöstedt_2017 | not_relevant | 0 | 0 | The paper studies natural compound inhibition of BCRP/MRP2 transporters in vesicles; it does not involve masoprocol or pharmacogenomics. |
| popPK | Sobański_1976 | irrelevant | 0 | 0 | The paper investigates the anti-inflammatory mechanisms of antioxidants and indomethacin, and does not mention masoprocol or its pharmacokinetics. |
| popPK | Souza_2020 | irrelevant | 0 | 0 | The paper studies lipoxygenase inhibition in glioblastoma cell lines in vitro and does not mention masoprocol or report pharmacokinetic parameters for it. |
| popPK | Sung_2009 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic mechanism of ropivacaine-induced contraction in rat aortic smooth muscle and does not involve masoprocol or pharmacokinetic parameters. |
| popPK | Sureja_2022 | irrelevant | 0 | 0 | The paper is an in-silico computational study on lignan derivatives for SARS-CoV-2 and does not involve masoprocol or pharmacokinetic parameters. |
| popPK | Taliwe_2026 | irrelevant | 0 | 0 | The paper is a review on medicinal plants from the Asteraceae family and does not mention masoprocol or report any pharmacokinetic parameters for it. |
| popPK | Tamaoki_1989 | irrelevant | 0 | 0 | The paper is an in vitro study on rabbit tracheal epithelium investigating bradykinin effects on ciliary motility and does not involve masoprocol pharmacokinetics. |
| popPK | Tamaoki_1991 | irrelevant | 0 | 0 | The paper is an in-vitro study on rabbit tracheal epithelium regarding atrial natriuretic factor and ciliary motility, completely unrelated to masoprocol pharmacokinetics. |
| popPK | Tanguy-Guillo_2026 | irrelevant | 0 | 0 | The paper focuses on the chemical isolation and antimicrobial activity of natural compounds from Larrea species, with no mention of masoprocol or pharmacokinetic studies. |
| popPK | Thomson_1984 | irrelevant | 0 | 0 | The study investigates leukocyte adherence and chemoattractants, with no mention of masoprocol or its pharmacokinetics. |
| popPK | Tiritilli_2004 | irrelevant | 0 | 0 | The paper studies bradykinin receptor-mediated contraction in human umbilical arteries and does not involve the drug masoprocol. |
| popPK | Van_1998 | irrelevant | 0 | 0 | The paper describes an in-vitro chemical screening method for antioxidants involving peroxynitrite and luminol, with no pharmacokinetic data or mention of masoprocol. |
| popPK | Viggiano_1985 | irrelevant | 0 | 0 | The paper investigates the inotropic effects of leukotrienes on isolated guinea pig and rat urinary bladders and does not involve masoprocol or pharmacokinetic modeling. |
| popPK | Wu_2001 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamics of fenamates on ion channels in human osteoblast cells and does not involve masoprocol or any pharmacokinetic analysis. |
| popPK | Yamamoto_1985 | irrelevant | 0 | 0 | The study investigates lipoxygenase inhibitors and insulin secretion in pancreatic islets and does not mention masoprocol or its pharmacokinetics. |
| popPK | Zhang_2005 | irrelevant | 0 | 0 | The paper is an in vitro study on arachidonic acid metabolism in rabbit mesenteric arteries and does not mention masoprocol. |
| popPK | de_2009 | irrelevant | 0 | 0 | The paper investigates the role of arachidonic acid metabolites in internal anal sphincter tone in rats and does not mention masoprocol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
